import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        
        fetch(url, {signal}) 
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
                if(signal.aborted) {
                    console.log('fetch aborted');
                } else {
                    setIsError(err.message);
                    setIsLoading(false);
                }
            })


        return () => controller.abort();
    },[url]);

    return {data, isLoading, isError};
}

export default useFetch;