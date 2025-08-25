import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast";

import AskName from "./pages/AskName.jsx";
import IntroductionPage from "./pages/IntroductionPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import AddTask from "./pages/AddTask.jsx";

import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AskName />}/>
        <Route path="/introduction" element={<IntroductionPage />}/>
        <Route path="/smartlist/homepage" element={<Homepage />}/>
        <Route path="/smartlist/add-task" element={<AddTask />}/>
      </Routes>
      <Toaster position="bottom-right" reverseOrder={true}/>
    </BrowserRouter>
    
  </StrictMode>
);
