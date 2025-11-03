import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "./httpServices";
import { imageUrl } from "../../components/apiConfig/ApiConfig";

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = React.useState(null);

  useEffect(() => {
    fetchMovieById(id, setMovieData);
  }, [id]);

  return (
    <div className="mt-1">
      {movieData ? (
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.69), rgb(0 0 0 / 82%)), url(${imageUrl}/${movieData.poster_path})`,
          }}
          className=" container  "
        >
          <div className="md:w-300 mx-auto  flex items-start gap-8 p-9">
            <div>
              <img
                src={`${imageUrl}/${movieData.poster_path}`}
                alt={movieData.title}
                className="w-270 shadow-slate-800  shadow-2xl rounded-lg"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{movieData.title}</h1>
              <p className="mb-2">
                <strong>Release Date:</strong> {movieData.release_date}
              </p>
              <p className="mb-2">
                <strong>Rating:</strong> ⭐ {movieData.vote_average}/10
              </p>
              <div className="mb-4 flex gap-4">
                {/* آیکون بوکمارک */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-400 hover:bg-slate-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="text-slate-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                  </svg>
                </div>

                {/* آیکون قلب */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-400 hover:bg-rose-700 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="text-rose-500"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-400 hover:bg-yellow-400 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-play"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                    </svg>
                  </div>
                </div>
              </div>
              <strong>Overview</strong>
              <p className="mb-4">{movieData.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Movie;
