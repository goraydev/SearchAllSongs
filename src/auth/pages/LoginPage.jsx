import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleClick = () => {
    login();
    navigate("/search", {
      replace: true,
    });
  };
  return (
    <div className="container mx-auto">
      <h1>Login page</h1>
      <button className="bg-amber-500 rounded-md p-2" onClick={handleClick}>
        login
      </button>
    </div>
  );
};
