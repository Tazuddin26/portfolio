import { Outlet, useLocation } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const Home = () => {
  const location = useLocation();
  // const noHeaderFooter = location.pathname.includes("skill");
  return (
    <div className="bg-zinc-900">
      <Banner />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;
