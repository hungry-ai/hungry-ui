import axios from "axios";

export const loadRestaurants = async (instagramUsername, zip) =>
  axios
    .get(`http://localhost:5000/instagram/restaurants`, {
      params: { username: instagramUsername, zip: zip },
    })
    .then((res) =>
      res &&
      res.data &&
      res.data.restaurants &&
      Array.isArray(res.data.restaurants)
        ? res.data.restaurants
        : []
    )
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
    .then((res) =>
      res && res.data && res.data.stories && Array.isArray(res.data.stories)
        ? res.data.stories
        : []
    )
    .catch((error) => {
      console.log(`loadReviews(${instagramUsername}) failed:\n${error}`);
      return [];
    });

export const loadAllReviews = async () =>
  axios
    .get(`http://localhost:5000/instagram/stories`)
    .then((res) =>
      res && res.data && res.data.stories && Array.isArray(res.data.stories)
        ? res.data.stories
        : []
    )
    .catch((error) => {
      console.log(`loadAllReviews() failed:\n${error}`);
      return [];
    });
