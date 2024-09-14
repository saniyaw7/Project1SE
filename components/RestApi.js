/*
This components allows us to get data from the api where u can chose the type of data 
and if needed can add filters.
*/
import { useEffect, useState } from 'react';

const useFetchData = (type, filter) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = '966ac55de3c816f715d15d864b887dcebf0f2626';

    useEffect(() => {
        const fetchData = async () => {
            try {
                // For the filter ex: useFetchData('exercise', 'equipment=1'); this will get exercises that use that certain equipment
                // If no filters just use: useFetchData('exercise', '');
                const response = await fetch(`https://wger.de/api/v2/${type}/?language=2&limit=999&${filter}`, {
                    headers: {
                        'Authorization': `Token ${API_KEY}`
                    }
                });

                const result = await response.json();
                setData(result.results);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, filter]);

    return { data, loading };
};

export default useFetchData;
