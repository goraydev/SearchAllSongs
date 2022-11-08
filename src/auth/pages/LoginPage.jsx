import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    formState: { name },
    onInputChange,
    onResetForm,
  } = useForm({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.length) return;

    login(name);
    navigate("/search", {
      replace: true,
    });

    onResetForm();
  };
  return (
    <div className="login">
      <section className="h-screen w-11/12 container mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl">Search All Songs</h1>

        <form
          action=""
          className="flex flex-col gap-4 p-4 backdrop-blur-md rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label htmlFor="name" className="text-2xl p-1">
              Write your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-2 outline-none p-1"
              value={name}
              onChange={onInputChange}
            />
          </div>
          <button
            type="submit"
            className="bg-amber-500 rounded-md p-2 self-center"
          >
            login
          </button>
        </form>
      </section>
    </div>
  );
};
