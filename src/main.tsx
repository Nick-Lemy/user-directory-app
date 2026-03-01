import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./features/home/pages/HomePage.tsx";
import UserPage from "./features/home/pages/UserPage.tsx";
import HomeLayout from "./features/home/layouts/HomeLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="users/:id" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
