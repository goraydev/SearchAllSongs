import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-amber-500 flex flex-col justify-center items-center gap-4 p-2 md:flex-row md:justify-between">
      <div className="first flex gap-2 justify-center items-center">
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            `${isActive ? "text-black" : "text-white"}`
          }
          end
        >
          Search all songs
        </NavLink>
        <nav className="dropdown">
          <ul>
            <li>
              <Link className="category">
                <p>Categories</p>
                <i className="fa-solid fa-caret-up arrow-up"></i>
              </Link>
              <ul>
                <NavLink
                  to={"/category/12"}
                  className={({ isActive }) =>
                    `${isActive ? "text-amber-500" : "text-white"}`
                  }
                  end
                >
                  Search all songs
                </NavLink>
                <NavLink
                  to={"/category/13"}
                  className={({ isActive }) =>
                    `${isActive ? "text-amber-500" : "text-white"}`
                  }
                  end
                >
                  Search all songs
                </NavLink>
              </ul>
            </li>
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
