import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../../ui";
import { Category, SearchPage } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto w-11/12">
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="/*" element={<Navigate to="/search" />} />
        </Routes>
      </div>
    </>
  );
};
