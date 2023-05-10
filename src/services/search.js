import axios from "axios";

export const loadRestaurants = async (instagramUsername, zip) =>
  axios
    .get(`http://localhost:5000/instagram/restaurants`, {
      params: { username: instagramUsername, zip: zip },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(
        `loadRestaurants(${instagramUsername}, ${zip}) failed:\n${error}`
      );
      return [];
    });

export const loadReviews = async (instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/stories`, {
      params: { username: instagramUsername },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.log(`loadReviews(${instagramUsername}) failed:\n${error}`);
      return [];
    });

export const loadAllReviews = async () =>
  axios
    .get(`http://localhost:5000/instagram/stories`)
    .then((res) => res.data)
    .catch((error) => {
      console.log(`loadAllReviews() failed:\n${error}`);
      return [];
    });
