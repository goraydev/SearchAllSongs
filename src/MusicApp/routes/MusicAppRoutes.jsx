import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, NavBar } from "../../ui";
import { ErrorPage, SearchPage, Song } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto w-11/12">
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="song/:id" element={<Song />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
