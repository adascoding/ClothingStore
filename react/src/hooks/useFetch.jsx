import { useState, useEffect } from "react";

export function useFetch(url) {
    const apiUrl = import.meta.env.VITE_API_URL;
    const apiToken = import.meta.env.VITE_API_TOKEN;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/${url}`, {
                    headers: {
                        Authorization: `Bearer ${apiToken}`
                    }
                });
                console.log(`Fetch url: ${apiUrl}/${url}`)
                if (!response.ok) {
                    throw new Error(`Network error ${response.status}`);
                }
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => {

        };
    }, [url])
    return { data, loading, error }
}