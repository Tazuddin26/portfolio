import React from "react";
import img1 from "../assets/image2.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero max-w-7xl mx-auto my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img
            src={img1}
            className="w-full lg:max-w-sm rounded-lg shadow-2xl "
          />
        </div>

        <div className="">
          <h1 className="text-5xl font-bold text-white">
            I Am Frontend Developer
          </h1>
          <p className="py-6 text-white">I am try to Make Beautiful Creator</p>
          <div className="my-10">
            <div className="join ">
              <Link to="https://github.com/Tazuddin26">
                <button className="btn join-item ">
                  <FaGithub size={30} className="" />
                </button>
              </Link>
              <Link to="https://www.facebook.com/taz.uddin.7">
                <button className="btn join-item ">
                  <FaFacebook size={30} className="text-blue-600" />
                </button>
              </Link>

              <button className="btn join-item ">
                <FaLinkedin size={30} className="text-blue-800" />
              </button>
            </div>
          </div>
          <Link to="https://drive.google.com/file/d/1J40u3duOBnST8IOx0o5Nyszxpd0v2qIi/view?usp=drive_link">
            <button className="btn bg-green-800 border-0 text-white hover:text-black">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
