import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { useSong } from "../../hooks";
import { SongList } from "../components";

export const Category = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const getSongs = useSong(q);

  return (
    <>
      <h1 className="text-center text-2xl my-2">{q}</h1>
      <hr />
      {getSongs?.songs && <SongList list={getSongs.songs} />}
    </>
  );
};
