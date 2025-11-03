import axios from "axios";
import { apiKey, baseUrl } from "../apiConfig/ApiConfig";

export async function getPopularMovies(setMovies, moviesActiveTab) {
  const response = await axios.get(`${baseUrl}/movie/${moviesActiveTab}`, {
    params: {
      api_key: apiKey,
    },
  });
  setMovies(response.data.results);
  return response;
}
export async function getNowPlayingMovies(setMovies, moviesActiveTab) {
  const response = await axios.get(`${baseUrl}/${moviesActiveTab}`, {
    params: {
      api_key: apiKey,
    },
  });
  setMovies(response.data.results);
  return response;
}
