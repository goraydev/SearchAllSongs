import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import useForm from "../../hooks/useForm";
import { SongList } from "../components";
import { useSong } from "../../hooks/useSong";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const {
    formState: { search },
    onInputChange,
  } = useForm({
    search: "",
  });

  const getSongs = useSong(q);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.length) return;

    navigate(`?q=${search}`);
  };

  return (
    <main className="mt-5 h-60">
      <h1 className="text-center text-2xl">Search All Songs</h1>
      <form
        action=""
        className="my-4 flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          id="search"
          className="border-2 border-amber-500 rounded-md p-2 focus:outline-none w-full md:w-1/3"
          placeholder="Search song"
          value={search}
          onChange={onInputChange}
        />
        <button>
          <img src="./micro-off.png" alt="micro" className="micro" />
        </button>
      </form>
      <hr />
      {getSongs?.songs && <SongList list={getSongs.songs} />}
    </main>
  );
};
