import { Outlet, useLocation } from "react-router-dom";
import Banner from "./Banner";
import About from "./About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const Home = () => {
  const location = useLocation();
  // const noHeaderFooter = location.pathname.includes("skill");
  return (
    <div className="">
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
