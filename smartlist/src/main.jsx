import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AskName from "./pages/AskName.jsx";
import IntroductionPage from "./pages/IntroductionPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import "./style.css";

const router = createBrowserRouter([
  {path: "/", element: <AskName />},
  {path: "/introduction", element: <IntroductionPage />},
  {path:"/homepage", element: <Homepage />}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
