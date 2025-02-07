import React from "react";
import img1 from "../assets/image2.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero max-w-7xl mx-auto bg-stone-50">
      <section className="w-full bg-white dark:bg-gray-900">
        <div className=" px-6 py-10 mx-auto">
          {/* <p className="text-xl font-medium text-blue-500 ">Testimonials</p>

      <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
        What clients saying
      </h1> */}

          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              <img
                className="md:mx-6 rounded-full object-cover shadow-md md:h-[rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                src={img1}
                alt="client photo"
              />

              <div className="mt-2 md:mx-6">
                <div>
                  <h1 className="lg:text-5xl text-4xl  font-bold text-gray-800 font-fn">
                    I'am Web Developer..
                  </h1>
                  <p className="lg:py-6 text-blue-100 font-fn text-xl lg:ml-20 text-end font-bold ">
                    I am always trying to make a beautiful Website.
                  </p>
                </div>

                <div className="my-10 flex items-center justify-between">
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
                  <div className="flex items-center justify-between  md:justify-start">
                    <Link to="https://drive.google.com/file/d/1J40u3duOBnST8IOx0o5Nyszxpd0v2qIi/view?usp=drive_link">
                      <button
                        title="right arrow"
                        className="p-2 px-6 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-green-600"
                      >
                        Resume
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Banner;
