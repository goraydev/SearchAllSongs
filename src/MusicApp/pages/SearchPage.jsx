import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm, useMicro, useSong } from "../../hooks";
import { SongList } from "../components";
import { useState } from "react";

export const SearchPage = () => {
  const [micro, setMicro] = useState(false);
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

  const { recognition } = useMicro();
  const handleMic = () => {
    recognition.start();

    recognition.onstart = () => {
      setMicro(true);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setMicro(false);
    };

    recognition.onresult = (e) => {
      const { transcript } = e.results[0][0];

      navigate(`?q=${transcript}`);
    };
  };

  return (
    <main className="mt-5 h-60">
      <h1 className="text-center text-3xl">Search All Songs</h1>
      <div className="flex justify-center items-center gap-4">
        <form
          aria-label="form"
          action=""
          className="my-4 flex gap-1 basis-1/2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="search"
            id="search"
            className="border-2 border-amber-500 rounded-md p-2 focus:outline-none"
            placeholder="Search song"
            value={search}
            onChange={onInputChange}
          />
          <button type="submit" className="bg-amber-500 p-2 rounded-md">
            Search
          </button>
        </form>
        <button onClick={handleMic}>
          {micro ? (
            <img src="./micro-on.png" alt="micro on" className="micro" />
          ) : (
            <img src="./micro-off.png" alt="micro off" className="micro" />
          )}
        </button>
      </div>
      <hr />
      {getSongs?.songs && <SongList list={getSongs.songs} />}
    </main>
  );
};
