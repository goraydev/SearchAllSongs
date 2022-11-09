import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = "") => {
    const user = { id: Date.now(), name };

    const action = {
      type: "login",
      payload: user,
    };

    localStorage.setItem("data", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("data");
    dispatch({
      type: "logout",
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
