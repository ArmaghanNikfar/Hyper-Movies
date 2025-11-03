import axios from "axios";
import { apiKey, baseUrl } from "../../components/apiConfig/ApiConfig";

export async function fetchMovieById(id, setMoviesData) {
  const response = await axios.get(`${baseUrl}/movie/${id}`, {
    params: { api_key: apiKey },
  });
  setMoviesData(response.data);
  return response;
}
