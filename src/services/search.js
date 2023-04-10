import axios from "axios";

export const loadRestaurants = async (find, location, instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/restaurants`)
    .then((res) => res.data)
    .catch((error) => {
      console.log("loadRestaurants failed");
      return [];
    });

export const loadReviews = async (instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/stories`)
    .then((res) => res.data)
    .catch((error) => {
      console.log("loadReviews failed");
      return [];
    });

export const loadStats = async (instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/stats`)
    .then((res) => res.data)
    .catch((error) => {
      console.log("loadStats failed");
      return {};
    });

export const loadAllReviews = async () =>
  axios
    .get(`http://localhost:5000/instagram/all-stories`)
    .then((res) => res.data)
    .catch((error) => {
      console.log("loadAllReviews failed");
      return [];
    });
