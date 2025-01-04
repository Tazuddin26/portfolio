import { Link } from "react-router-dom";
import img1 from "../assets/Project11/pic1.png";
import img2 from "../assets/Project11/pic2.png";
import img3 from "../assets/Project11/pic3.png";
import img4 from "../assets/Project11/pic4.png";
import img5 from "../assets/project9/img1.png";
import img6 from "../assets/project9/img2.png";
import img7 from "../assets/project9/img3.png";
import img8 from "../assets/project9/img4.png";
import img9 from "../assets/project8/img1.png";
import img10 from "../assets/project8/img2.png";
import img11 from "../assets/project8/img3.png";
import img12 from "../assets/project8/img4.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-7xl mx-auto bg-zinc-900">
      <p className="text-white text-3xl text-center">My Projects</p>
      <hr  className="w-48 text-center"/>
      <section className="py-6 flex flex-col ">
        <div className="container grid grid-cols-2  gap-4 p-8  md:grid-cols-4 lg:w-7/12 lg:relative  bg-sky-900 hover:scale-95 duration-300">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
        </div>
        <div className="lg:w-4/12 text-center lg:text-start lg:absolute right-32 top-94 ">
          <h1 className="text-3xl font-bold text-white">Volunteer Project</h1>
          <p className="py-6 text-white">
            social Volunteer application built with React, Tailwind css Node.js,
            Express.js, MongoDB ,
          </p>
          <Link
            to="https://assignment-11-client-sid-68c66.web.app/"
            className="text-white btn btn-outline border-0 border-b-4 border-rose-700 ml-10"
          >
            View More
          </Link>
        </div>
      </section>
      <section className="py-6 flex lg:flex-row-reverse flex-col">
        <div className="container grid grid-cols-2 gap-4 p-8  md:grid-cols-4 lg:w-7/12 lg:relative  bg-sky-900 hover:scale-95 duration-300">
          <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img8}
          />
        </div>
        <div className="lg:w-4/12 lg:absolute left-40 text-center lg:text-start ">
          <h1 className="text-3xl font-bold text-white ">
            Discount Shop Project
          </h1>
          <p className="py-6 text-white ">
            Discount Pro Coupon Application built with React, Tailwind css
            firebase,
          </p>
          <Link
            to="https://famous-hamster-adde34.netlify.app/"
            className="text-white btn btn-outline border-0 border-b-4 border-rose-700 "
          >
            Live Project
          </Link>
        </div>
      </section>
      <section className="py-6 flex flex-col">
        <div className="container grid grid-cols-2 gap-4 p-8 bg-sky-900 md:grid-cols-4 lg:w-7/12 lg:relative hover:scale-95 duration-300">
          <img
            src={img9}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img10}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img11}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img12}
          />
        </div>
        <div className="lg:w-4/12 text-center lg:text-start lg:absolute right-32 -bottom-90 ">
          <h1 className="text-3xl font-bold text-white ">
            Gadget Heaven Project
          </h1>
          <p className="py-6 text-white ">
            Simple Gadget collection application built with React, Tailwind css
          </p>
          <Link
            to="https://gadget-heaven-team.netlify.app/"
            className="text-white btn btn-outline border-0 border-b-4 border-rose-700 "
          >
            Live Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
