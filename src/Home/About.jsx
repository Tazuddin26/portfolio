import React from "react";
import img2 from "../assets/image.jpg";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { FaReact, FaCss3Alt, FaHtml5,FaNodeJs } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="hero bg-zinc-800 max-w-7xl mx-auto my-5   ">
      <div className="hero-content text-center w-full flex flex-col lg:flex-row">
        <div className="max-w-2xl text-white ">
          <h1 className="text-5xl font-bold mb-5">About Me</h1>
          <hr className="" />
          <p className="py-6 text-xl text-start">
            I am starting my Developer career as a Jr. Frontend Developer. I
            enjoy this because my work creativity skills can be demonstrated
            through this profession. I started my programming journey with own
            my interest. When I’m not at my computer I like to spend my time
            reading Islamic Books and the Quran,
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-col-3 lg:grid-cols-3 gap-4 ">
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="rounded-xl flex justify-center items-center bg-zinc-800 h-40 w-40 ">
           <SiJavascript size={100} className=" text-yellow-400 rounded-xl" />
           </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="rounded-xl flex justify-center items-center  bg-zinc-800 h-40 w-40 ">
            <FaCss3Alt size={100} className=" text-sky-600" />
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className=" h-40 w-40 flex justify-center items-center bg-zinc-800 rounded-xl ">
            <FaReact size={100} className=" text-sky-600" />
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className=" rounded-xl h-40 w-40 flex justify-center bg-zinc-800 items-center ">
            < SiTailwindcss size={100} className=" text-sky-600"/>
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-zinc-800 rounded-xl h-40 w-40 flex justify-center items-center ">
            < SiMongodb size={100} className=" text-green-600"/>
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-zinc-800 rounded-xl h-40 w-40 flex justify-center items-center ">
           <FaHtml5 size={100} className=" text-orange-600"/>
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-zinc-800 rounded-xl h-40 w-40 flex justify-center items-center ">
           <SiExpress size={80} className="border rounded-full bg-gray-500 text-white"/>
          </div>
          </div>
          <div className="h-42 w-42 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="bg-zinc-800 rounded-xl h-40 w-40 flex justify-center items-center ">
           <FaNodeJs size={100} className=" text-green-400"/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
