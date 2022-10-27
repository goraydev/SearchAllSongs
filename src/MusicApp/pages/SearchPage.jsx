import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import useForm from "../../hooks/useForm";
import { SongList } from "../components";
import useFetch from "../../hooks/useFetch";

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

  const header = "3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3";
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${q}`;

  const songs = useFetch(url, header).data;
  if (songs === null) return;

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
      <SongList list={songs.data} />
    </main>
  );
};
