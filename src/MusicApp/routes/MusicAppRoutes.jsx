import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, NavBar } from "../../ui";
import { Song } from "../components";
import { Category, SearchPage } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto w-11/12">
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="song/:id" element={<Song />} />
          <Route path="/*" element={<Navigate to="/search" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
