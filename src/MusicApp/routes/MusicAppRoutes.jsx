import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, NavBar } from "../../ui";
import { ErrorPage, MyFavoritesSong, SearchPage, Song } from "../pages";

export const MusicAppRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto w-11/12">
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="favoritesongs" element={<MyFavoritesSong />} />
          <Route path="song/:id" element={<Song />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
