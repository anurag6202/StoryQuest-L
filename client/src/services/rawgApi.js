import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const BASE_URL = "https://api.rawg.io/api";

export const getPopularGames = async () => {
  const response = await axios.get(
    `${BASE_URL}/games?key=${API_KEY}`
  );

  return response.data.results;
};

export const searchGames = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/games?search=${query}&key=${API_KEY}`
  );

  return response.data.results;
};

export const getGameDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/games/${id}?key=${API_KEY}`
  );

  return response.data;
};