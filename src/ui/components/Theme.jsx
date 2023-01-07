import { useRef, useState } from "react";

export const Theme = () => {
  const [getTheme, setgetTheme] = useState("light");
  const inputRef = useRef();

  const swithTheme = () => {
    const value = inputRef.current.checked;
    if (value) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark:bg-slate-800");
      setgetTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark:bg-slate-800");
      setgetTheme("light");
    }
  };

  return (
    <>
      {/*<!-- Component: Base sized primary basic toggle button --> */}
      <div className="relative flex flex-wrap items-center">
        <input
          ref={inputRef}
          onChange={swithTheme}
          className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-100 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-700 after:transition-all checked:bg-gray-400 checked:after:left-4 checked:after:bg-gray-700 hover:bg-slate-100 after:hover:bg-slate-600 checked:hover:bg-gray-300 checked:after:hover:bg-gray-600 focus:outline-none checked:focus:bg-gray-400 checked:after:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
          type="checkbox"
          value=""
          id="id-c01"
        />
        <label
          className="cursor-pointer pl-2 text-white peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
          htmlFor="id-c01"
        >
          {getTheme}
        </label>
      </div>
      {/*<!-- End Base sized primary basic toggle button --> */}
    </>
  );
};
