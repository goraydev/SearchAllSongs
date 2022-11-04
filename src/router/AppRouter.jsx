import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { MusicAppRoutes } from "../MusicApp/routes/MusicAppRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <MusicAppRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
