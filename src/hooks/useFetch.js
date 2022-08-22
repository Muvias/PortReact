import axios from "axios";

import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [url])
  
    return { data, error, isLoading };
};