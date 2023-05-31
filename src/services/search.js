import axios from "axios";

export const loadRestaurants = async (instagramUsername, zip) =>
  axios
    .get(`https://hungry-api.up.railway.app/instagram/restaurants`, {
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
    .get(`https://hungry-api.up.railway.app/instagram/stories`, {
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
    .get(`https://hungry-api.up.railway.app/instagram/stories`)
    .then((res) =>
      res && res.data && res.data.stories && Array.isArray(res.data.stories)
        ? res.data.stories
        : []
    )
    .then((stories) =>
      stories.map((story) => ({
        username: story.instagramUsername,
        url: story.url,
        rating: story.rating,
        timestamp: story.created_time,
      }))
    )
    .catch((error) => {
      console.log(`loadAllReviews() failed:\n${error}`);
      return [];
    });
