import { useEffect, useState } from "react";
import { startConsulting } from "../../helpers/startConsulting";
import { SongList } from "../components/SongList";

export const MyFavoritesSong = () => {
  const listFavorites = JSON.parse(localStorage.getItem("myFavoritesSong"));
  const newList = listFavorites?.map((id) => Number(id));
  const [favorites, setFavorites] = useState([]);

  const getFavorites = async () => {
    const data = await startConsulting(newList);
    setFavorites(data);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <h1 className="mt-5 text-center text-3xl">My favorite Songs</h1>

      {!listFavorites && (
        <p className="mt-20 text-center text-xl">
          Your favorite songs will be displayed here.
        </p>
      )}

      <SongList list={favorites} />
    </>
  );
};
