import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Route from "./Route/Route";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Mobile from "./Pages/Mobile/Mobile";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Route/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/menu',
        element : <Menu/>,
      },
      {
        path : '/mobile-app',
        element : <Mobile/>
      },
      {
        path : "/contact",
        element : <Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
