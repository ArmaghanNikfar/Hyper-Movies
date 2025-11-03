import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import FollowUs from "./FollowUs";
import SwiperHeader from "./Swiper";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className="p-6 md:py-12 pb-38 bg-cover"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.49), rgb(0 0 0 / 82%)), url(/header.jpg)`,
      }}
    >
      <Navigation />
      <Search />
      {location.pathname === "/" && (
        <>
          <FollowUs />
          <SwiperHeader />
        </>
      )}
    </header>
  );
};

export default Header;
