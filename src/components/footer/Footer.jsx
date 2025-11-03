import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8 mt-4">
      <div className="flex items-center ">
        <Link to="/">
          <h1 className="text-3xl mr-20">
            Hyper <span className="text-rose-600">Movies</span>{" "}
          </h1>
        </Link>

        <ul className="ml-auto mr-4 items-center">
          <h1 className="font-bold">The Basics</h1>
          <li>About Armaghan Nikfar</li>
          <li>Contact Us</li>
          <li>API for Business</li>
        </ul>
        <ul>
          <h1 className="font-bold">Contribution Bible</h1>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
        <p className="ml-auto text-gray-400">
          &copy; 2024 Hyper Movies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
