export const songConsulting = async (id) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${id}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3a28efbae9msh33beba2add552bbp19053djsn4de28e3b0af3',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };


    try {
        const track = await fetch(url, options);
        const results = await track.json();
        return results;

    } catch (error) {
        return null;
    }
}
