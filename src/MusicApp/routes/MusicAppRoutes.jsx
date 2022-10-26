import { Routes, Route, Navigate } from "react-router-dom";
import { Category, SearchPage } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="search" element={<SearchPage />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="/*" element={<Navigate to="/search" />} />
      </Routes>
    </>
  );
};
