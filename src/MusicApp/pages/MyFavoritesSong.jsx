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
     
      <SongList list={favorites} />
    </>
  );
};
