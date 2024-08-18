import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import Home from "../pages/home/Home";
import Signin from "../pages/Signin/Signin";
import TodaysPlan from "../pages/todayPlan/TodaysPlan";
import Project from "../pages/project/Project";
import Timeline from "../pages/timeline/Timeline";
import AllTask from "../pages/allTasks/AllTask";

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
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/completed-task",
        element: <AllTask  />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
]);

export default routes;
