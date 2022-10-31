import { NavLink } from "react-router-dom";
import { genres } from "../data/genres";

export const Genders = () => {
  return (
    <>
      {genres.map((g) => (
        <NavLink
          key={g.id}
          to={`category?q=${g.name}`}
          className={({ isActive }) =>
            ` flex justify-center items-center w-full ${
              isActive ? "text-amber-500" : "text-white hover:bg-amber-500"
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
