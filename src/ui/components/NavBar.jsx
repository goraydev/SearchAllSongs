import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { Genders } from "./Genders";

export const NavBar = () => {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
    logout();
  };

  return (
    <nav className="bg-amber-500 flex flex-col justify-center items-center gap-4 p-2 md:flex-row md:justify-between">
      <div className="first flex gap-2 justify-center items-center">
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-black"}`
          }
          end
        >
          Search all songs
        </NavLink>
        <nav className="dropdown">
          <ul>
            <li>
              <Link className="category">
                <p>Genres</p>
                <i className="fa-solid fa-caret-up arrow-up"></i>
              </Link>
              <ul className="z-10">
                <Genders />
              </ul>
            </li>
          </ul>
        </nav>

        <NavLink
          to={"/favoritesongs"}
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-black"}`
          }
          end
        >
          My favorites Song
        </NavLink>
      </div>
      <div className="second flex justify-center items-center gap-4">
        <p aria-label="user">Hello {user?.name}</p>
        <button
          className="bg-gray-800 px-2 py-1 rounded-md text-white hover:bg-gray-900"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
