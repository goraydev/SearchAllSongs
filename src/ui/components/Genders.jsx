import { NavLink, useLocation } from "react-router-dom";
import { genres } from "../data/genres";

export const Genders = () => {
  const location = useLocation();

  return (
    <>
      {genres.map((g) => (
        <NavLink
          key={g.id}
          to={`category?q=${g.name}`}
          className={({ isActive }) =>
            ` flex justify-center items-center w-full ${
              location.pathname ==="/search" && isActive ? "text-amber-500" : "text-white hover:bg-amber-500"
            }`
          }
          end
        >
          {g.name}
        </NavLink>
      ))}
    </>
  );
};
