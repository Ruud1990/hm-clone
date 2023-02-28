import { useEffect, useState } from "react";

const useFetchProducts = (url, options) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try {
            setLoading(true)
            const getProducts = async () => {
                const api = await fetch(url, options);
                const data = await api.json();
                setData(data.payload.products);
                console.log(data.payload.products);
            }
            getProducts()
            setLoading(false);
        } catch(err) {
            console.log(err);
            setLoading(false);
            }
    }, [url]);
    return { data, loading }
  };
  export default useFetchProducts;