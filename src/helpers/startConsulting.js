import { songConsulting } from "./songConsulting";

export const startConsulting = async (idSongs = []) => {
    //Código para consultar todos las canciones de manera simultanea
    const listFavoritesSongPromises = [];
    for (const id of idSongs) {

        listFavoritesSongPromises.push(songConsulting(id));
    }
    return await Promise.all(listFavoritesSongPromises);

}
