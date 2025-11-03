import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { apiKey, baseUrl, imageUrl } from "../apiConfig/ApiConfig";
import { Link } from "react-router-dom";
const SwiperHeader = () => {
  const [movies, setMovies] = React.useState([]);

  async function fetchMovies() {
    const response = await axios.get(`${baseUrl}/movie/now_playing`, {
      params: {
        api_key: apiKey,
      },
    });
    setMovies(response.data.results);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className=" container  mx-auto md:w-300 ">
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

export default SwiperHeader;
