import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { apiKey, baseUrl, imageUrl } from "../apiConfig/ApiConfig";
import { Link } from "react-router-dom";
import { getPopularMovies } from "./httpServices";
const PopularMovies = () => {
  const [movies, setMovies] = React.useState([]);
  const [moviesActiveTab, setMoviesActiveTab] = React.useState("popular");

  const handleActiveTab = (tab) => {
    setMoviesActiveTab(tab);
    getPopularMovies(setMovies, moviesActiveTab);
  };

  const isTabActive = (tab) => {
    return moviesActiveTab === tab
      ? "text-rose-400 bg-slate-700 px-3 py-1 rounded-2xl font-bold "
      : "text-white bg-slate-500 px-3 py-1 rounded-2xl";
  };

  useEffect(() => {
    getPopularMovies(setMovies, moviesActiveTab);
  }, []);

  return (
    <div>
      <div className="md:flex gap-8 items-center mb-4">
        <h3 className="text-slate-500  text-2xl uppercase">What's Popular</h3>
        <ul className=" items-center flex  p-2 gap-2 text-rose-300 mb-4 md:mb-0 cursor-pointer">
          <li
            className={isTabActive("popular")}
            onClick={() => handleActiveTab("popular")}
          >
            latest
          </li>
          <li
            className={isTabActive("now_playing")}
            onClick={() => handleActiveTab("now_playing")}
          >
            now playing
          </li>
          <li
            className={isTabActive("top_rated")}
            onClick={() => handleActiveTab("top_rated")}
          >
            top rated
          </li>
          <li
            className={isTabActive("upcoming")}
            onClick={() => handleActiveTab("upcoming")}
          >
            up comming
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
                {movie.title}
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

export default PopularMovies;
