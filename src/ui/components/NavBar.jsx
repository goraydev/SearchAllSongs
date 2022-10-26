import { NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-amber-500 flex flex-col justify-center items-center gap-4 p-2 md:flex-row md:justify-between">
      <div className="first flex gap-2">
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-white"}`            
          }
          end
        >
          Search all songs
        </NavLink>
        <nav>
          categories
          <ul className="flex flex-col">
            <NavLink
              to={"/category/12"}
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-white"}`
              }
              end
            >
              Search all songs
            </NavLink>
            <NavLink
              to={"/category/13"}
              className={({ isActive }) =>
                `${isActive ? "text-black" : "text-white"}`
              }
              end
            >
              Search all songs
            </NavLink>
          </ul>
        </nav>
      </div>
      <div className="second">
        <button
          className="bg-black px-2 py-1 rounded-md text-white hover:bg-gray-800"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
