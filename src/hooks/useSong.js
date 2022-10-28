import useFetch from "./useFetch";

export const useSong = (q) => {

    const header = "3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3";
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${q}`;

    const songs = useFetch(url, header).data;
    if (songs === null) return;
    return {
        songs: songs.data
    }
}
