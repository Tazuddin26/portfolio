import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Skill from "../Pages/Skill";
import Projects from "../Pages/Projects";
import About from "../Home/About";
import Root from "./Root";
import Contact from "../Pages/Contact";
import DetailsOne from "../Pages/details/DetailsOne";
import DetailsTwo from "../Pages/details/DetailsTwo";
import DetailsThree from "../Pages/details/DetailsThree";

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
      },
      {
        path:'/detailsOne',
        element:<DetailsOne/>
      },
      {
        path:'/detailsTwo',
        element:<DetailsTwo/>
      },
      {
        path:'/detailsThree',
        element:<DetailsThree/>
      }
    ],
  },
]);

export default router;
