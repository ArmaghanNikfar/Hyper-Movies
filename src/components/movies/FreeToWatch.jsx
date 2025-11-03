import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { apiKey, baseUrl, imageUrl } from "../apiConfig/ApiConfig";
import { Link } from "react-router-dom";
import { getNowPlayingMovies } from "./httpServices";
const FreeToWatch = () => {
  const [movies, setMovies] = React.useState([]);
  const [moviesActiveTab, setMoviesActiveTab] =
    React.useState("trending/movie/day");

  const handleActiveTab = (tab) => {
    setMoviesActiveTab(tab);
    getNowPlayingMovies(setMovies, moviesActiveTab);
  };

  const isTabActive = (tab) => {
    return moviesActiveTab === tab
      ? "text-rose-400 bg-slate-700 px-3 py-1 rounded-2xl font-bold "
      : "text-white bg-slate-500 px-3 py-1 rounded-2xl";
  };
  useEffect(() => {
    getNowPlayingMovies(setMovies, moviesActiveTab);
  }, []);

  return (
    <div className="mt-8">
      <div className="md:flex gap-8 items-center mb-4">
        <h3 className="text-slate-500  text-2xl uppercase">Free To Watch</h3>
        <ul className=" items-center flex  p-2 gap-2 text-rose-300 mb-4 md:mb-0 cursor-pointer">
          <li
            className={isTabActive("trending/movie/day")}
            onClick={() => handleActiveTab("trending/movie/day")}
          >
            Movie
          </li>
          <li
            className={isTabActive("trending/tv/day")}
            onClick={() => handleActiveTab("trending/tv/day")}
          >
            Tv
          </li>
        </ul>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2000,
        }}
        centeredSlides
        modules={[Autoplay]}
        className="mr-0"
        loop={true}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <Link to={`/movies/${movie.id}`} key={index}>
              <h1 className="text-white bottom-10 absolute left-4 z-10 font-bold">
                {moviesActiveTab === "trending/tv/day"
                  ? movie.title
                  : movie.name}
              </h1>
              <img
                src={`${imageUrl}/${movie.poster_path}`}
                className="w-full"
              />
              <h1 className="text-white absolute bottom-4 left-4 z-10 font-bold">
                ⭐ {movie.vote_average}/10
              </h1>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FreeToWatch;
