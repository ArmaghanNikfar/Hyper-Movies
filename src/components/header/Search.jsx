import axios from "axios";
import React, { useEffect } from "react";
import { apiKey, baseUrl } from "../apiConfig/ApiConfig";

const Search = () => {
  const [searchedresults, setSearchedResults] = React.useState([]);
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    const timeOut = setTimeout(async () => {
      if (query.length > 0) {
        const response = await axios.get(`${baseUrl}/search/movie`, {
          params: {
            query: query,
            api_key: apiKey,
          },
        });
        setSearchedResults(response.data.results);
        console.log("searched results", response.data.results);
      } else {
        setSearchedResults([]);
        setQuery("");
      }
    }, 500);
    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <div className="container  mx-auto md:w-300 p-0 relative ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="w-full bg-gray-800 text-white rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
      />
      {searchedresults.length > 0 && query.length > 0 ? (
        <div
          className={`w-full bg-slate-600 h-52 mt-2 absolute  z-10 rounded-md transition-all duration-100${
            searchedresults.length > 0 && query.length > 0
              ? `max-h-44 overflow-auto`
              : `h-0 overflow-hidden`
          }`}
        >
          {searchedresults.map((movie) => (
            <div
              key={movie.id}
              className="p-2 border-b border-gray-400 hover:bg-gray-700 cursor-pointer"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={movie.title}
                className="w-12 inline-block mr-4"
              />
              {movie.title}
            </div>
          ))}
        </div>
      ) : null}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        class="bi bi-search"
        viewBox="0 0 16 16"
        className=" absolute right-6 -translate-y-8"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </div>
  );
};

export default Search;
