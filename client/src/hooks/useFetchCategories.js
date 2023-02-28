import { useEffect, useState } from "react";

const useFetchCategories = (url, options) => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            const getCategories = async () => {
                const api = await fetch(url, options);
                const data = await api.json();
                setData(data.payload.categories);
                console.log(data.payload.categories);
            }
            getCategories()
            } catch(err) {
                console.log(err);
            }
    }, [url]);
    return { data }
  };
  export default useFetchCategories;