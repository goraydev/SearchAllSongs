import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleClick = () => {
    login("Ramos");
    navigate("/search", {
      replace: true,
    });
  };
  return (
    <div className="login">
      <section className="h-screen container mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl">Login</h1>

        <form
          action=""
          className="flex flex-col gap-4 p-2 backdrop-blur-md rounded-md"
        >
          <div className="field">
            <label htmlFor="name" className="text-2xl p-1">
              Write your name
            </label>
            <input type="text" name="name" id="name" className="mt-2 outline-none p-1" />
          </div>
          <button
            type="submit"
            className="bg-amber-500 rounded-md p-2 self-center"
            onClick={handleClick}
          >
            login
          </button>
        </form>
      </section>
    </div>
  );
};
