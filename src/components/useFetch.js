import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        fetch(url) 
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch from the resource.')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
            setIsError(false);
        })
        .catch(err => {
            setIsError(err.message);
            setIsLoading(false);
        })
    },[url]);

    return {data, isLoading, isError};
}

export default useFetch;