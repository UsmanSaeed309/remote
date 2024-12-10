import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import Test from "./pages/test/test";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

export default Router;
