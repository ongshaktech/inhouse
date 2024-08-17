import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import Home from "../pages/home/Home";
import Signin from "../pages/Signin/Signin";
import TodaysPlan from "../pages/todayPlan/TodaysPlan";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todays-plan",
        element: <TodaysPlan />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default routes;
