import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Skill from "../Pages/Skill";
import Projects from "../Pages/Projects";
import About from "../Home/About";
import Root from "./Root";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:'/projects',
        element:<Projects/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ],
  },
]);

export default router;
