import { Link } from "react-router-dom";
import img1 from "../assets/Project11/pic1.png";
import img2 from "../assets/Project11/pic2.png";
import img3 from "../assets/Project11/pic3.png";
import img4 from "../assets/Project11/pic4.png";
import img5 from "../assets/project9/img1.png";
import img6 from "../assets/project9/img2.png";
import img7 from "../assets/project9/img3.png";
import img8 from "../assets/project9/img4.png";
import { RiCheckDoubleFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithub, FaNodeJs, FaReact, FaReacteurope } from "react-icons/fa";
// import { useState } from "react";

const Projects = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleDetails = () => {
  //   setIsOpen(true);
  // };

  const checkDouble = (
    <RiCheckDoubleFill size={24} className="text-green-600" />
  );
  return (
    <div id="projects" className="max-w-7xl mx-auto ">
      <div className=" flex flex-col justify-center items-center space-y-2 my-6">
        <p className="text-white font-fn text-3xl ">My Projects</p>
        {/* <hr className="w-48 border-green-600 my-3 " /> */}
      </div>
      <section className="py-6 flex lg:flex-row-reverse flex-col ">
        <div className="container grid grid-cols-2 gap-4 p-8  md:grid-cols-4 lg:w-7/12 lg:relative  bg-blue-600 hover:scale-95 duration-300">
          <img
            src="https://i.ibb.co.com/qLBS1Gqh/rent1.png"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/RT4wCnhg/rent5.png"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/HDm9cR1X/rent3.png"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/b5CCBY1S/rent4.png"
          />
        </div>
        <div className="lg:w-4/12  lg:absolute lg:left-20 px-2 text-center lg:text-start">
          <h1 className="text-3xl font-bold text-white font-fn">
            Building Management Project
          </h1>
          <hr className="my-3 border-green-500" />
          <ul className=" text-white font-fn text-xl space-y-2 ">
            <li className="flex gap-2">
              <span> {checkDouble}</span>
              <p>
                There is a beautiful banner, Swiper Apartments Cart, Apartments
                Feature, About Apartments, and Nice Footer section with Email
                options
              </p>
            </li>
            <li className="flex gap-2">
              <span>{checkDouble}</span>
              <p>
                The Apartments page has all the cards. The cards can be Filtered
                by Rent, the card Description can be searched and the last is
                Pagination.
              </p>
            </li>
            <li className="flex gap-2">
              <span>{checkDouble}</span>
              <p>
                Lastly, The website has an admin dashboard, member dashboard,
                and user dashboard.
              </p>
            </li>
            {/* <p className="font-bold">Useges Technology --</p> */}
            <div className="flex items-center justify-center lg:justify-start gap-4 my-4">
              <SiJavascript size={28} className=" text-yellow-400 rounded-xl" />
              <FaReacteurope size={28} className=" text-sky-600" />
              <SiTailwindcss size={28} className=" text-sky-600" />
              <SiMongodb size={28} className=" text-green-600" />
              <SiExpress
                size={28}
                className="border rounded-full bg-gray-500 text-white"
              />
              <FaNodeJs size={28} className=" text-green-400" />
            </div>
          </ul>

          <div className="flex items-center gap-4 mt-10">
          <Link to="/detailsThree">
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                Details
              </button>
            </Link>
            <Link
              to="https://assignment-12-dead3.web.app/"
              className=" 
             "
            >
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                {" "}
                View More
              </button>
            </Link>
            <Link to="https://github.com/Tazuddin26/Apartment-client">
              <button className="btn px-6 py-1 border ">
                <FaGithub size={30} className="" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-6 flex flex-col ">
        <div className="container grid grid-cols-2 gap-4 p-8  md:grid-cols-4 lg:w-7/12 lg:relative  bg-blue-700 hover:scale-95 duration-300">
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
        <div className="lg:w-4/12 text-center lg:text-start px-2 lg:absolute lg:right-20 top-94 ">
          <h1 className="text-3xl font-bold text-white font-fn ml-4">
            Volunteer Project
          </h1>
          <hr className="my-3 border-green-500" />
          <ul className=" text-white font-fn text-xl space-y-2 lg:ml-4">
            <li className="flex gap-3">
              <span> {checkDouble}</span>
              <p>
                First of all, there is a beautiful banner with some writing
                about volunteers and there are six cards.
              </p>
            </li>
            <li className="flex gap-3">
              <span>{checkDouble}</span>
              <p>
                The Need Volunteers page has all the cards. The cards can be
                sorted by deadline, the card category can be searched, and a
                button displays the cards in table and card format.
              </p>
            </li>
            <li className="flex gap-3">
              <span> {checkDouble}</span>
              <p>
                There are 2 options in the profile Add Volunteer and Manage
                Post. You can delete and edit posts through Manage Post.
              </p>
            </li>
            {/* <p className="font-bold">Useges Technology --</p> */}
            <div className="flex items-center justify-center lg:justify-start gap-4 my-4">
              <SiJavascript size={28} className=" text-yellow-400 rounded-xl" />
              <FaReacteurope size={28} className=" text-sky-600" />
              <SiTailwindcss size={28} className=" text-sky-600" />
              <SiMongodb size={28} className=" text-green-600" />
              <SiExpress
                size={28}
                className="border rounded-full bg-gray-500 text-white"
              />
              <FaNodeJs size={28} className=" text-green-400" />
            </div>
          </ul>
          <div className="flex items-center gap-4 mt-10">
          <Link to="/detailsTwo">
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                Details
              </button>
            </Link>
            <Link
              to="https://assignment-11-client-sid-68c66.web.app/"
              className=" 
             "
            >
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                {" "}
                View More
              </button>
            </Link>
           
            <Link to="https://github.com/Tazuddin26/assignment-11-client">
              <button className="btn px-6 py-1 border ">
                <FaGithub size={30} className="" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-6 flex lg:flex-row-reverse flex-col">
        <div className="container grid grid-cols-2 gap-4 p-8  md:grid-cols-4 lg:w-7/12 lg:relative  bg-blue-700 hover:scale-95 duration-300">
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
        <div className="lg:w-4/12 lg:absolute left-20 text-center lg:text-start ">
          <h1 className="text-3xl font-bold text-white font-fn ">
            Discount Shop Project
          </h1>
          <hr className="my-3 border-green-500" />
          <ul className=" text-white font-fn text-xl space-y-2 ">
            <li className="flex gap-3">
              <span> {checkDouble}</span>
              <p>
                This website is a discount shop where discount offers on various
                e-commerce websites are shown to the customers and the customers
                can purchase with discount.
              </p>
            </li>
            <li className="flex gap-3">
              <span>{checkDouble}</span>
              <p>
                Here, all brands are shown with discount coupons in the brand
                section. By clicking on the View Coupon button, the coupon code
                with the discount percentage will be shown, and the customer can
                use the coupon code to get the discount.
              </p>
            </li>

            {/* <p className="font-bold">Useges Technology --</p> */}
            <div className="flex items-center justify-center lg:justify-start gap-4 my-4">
              <SiJavascript size={28} className=" text-yellow-400 rounded-xl" />
              <FaReacteurope size={28} className=" text-sky-600" />
              <SiTailwindcss size={28} className=" text-sky-600" />
            </div>
          </ul>
          <div className="flex items-center gap-4 mt-10">
            <Link to="/detailsOne">
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                Details
              </button>
            </Link>
            <Link
              to="https://famous-hamster-adde34.netlify.app/"
              className=" 
             "
            >
              <button className=" px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none">
                {" "}
                View More
              </button>
            </Link>
            <Link to="https://github.com/Tazuddin26/assignment-09">
              <button className="btn px-6 py-1 border ">
                <FaGithub size={30} className="" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* {isOpen &&(
      <Details isOpen={isOpen} setIsOpen={setIsOpen}/>
      )
      
      } */}
    </div>
  );
};

export default Projects;
