import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../../ui";
import { Category, SearchPage } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="search" element={<SearchPage />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="/*" element={<Navigate to="/search" />} />
      </Routes>
    </>
  );
};
