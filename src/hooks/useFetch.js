import { useEffect, useState } from "react"

const useFetch = (url, header) => {
    const myHeader = new Headers();
    myHeader.append("X-RapidAPI-Key", header);
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    })

    const requestOptions = {
        method: 'GET',
        headers: myHeader,
        redirect: 'follow'
    };


    const getFetch = async () => {
        setState({
            data: null,
            isLoading: true,
            error: null
        });

        const resp = await fetch(url, requestOptions);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            error: null
        });
    }


    useEffect(() => {
        getFetch();

    }, [url])

    return {
        ...state,
        state
    };
}

export default useFetch