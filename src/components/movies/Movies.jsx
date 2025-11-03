import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import PopularMovies from "./popular";
import FreeToWatch from "./FreeToWatch";
const Movies = () => {
  return (
    <div className="container md:w-300 mx-auto p-6">
      <PopularMovies />
      <FreeToWatch />
    </div>
  );
};

export default Movies;
