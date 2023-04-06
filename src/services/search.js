import axios from "axios";

export const loadRestaurants = async (find, location, instagramUsername) => {
  return axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/restaurants`)
    .then((res) => res.data)
    .catch((error) => []);
};

export const loadReviews = async (instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/stories`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => []);

export const loadStats = async (instagramUsername) =>
  axios
    .get(`http://localhost:5000/instagram/${instagramUsername}/stats`)
    .then((res) => res.data)
    .catch((error) => ({}));
