import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { MusicAppRoutes } from "../MusicApp/routes/MusicAppRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<MusicAppRoutes />} />
      </Routes>
    </>
  );
};
