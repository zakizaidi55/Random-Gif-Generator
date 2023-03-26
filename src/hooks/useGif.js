import React, { useState } from 'react';

import axios from 'axios';
import { useEffect} from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagMemeURL  = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
       
const useGif = (tag) => {
   
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
   

    async function fetchData (tag) {
        setLoading(true);
       
       const {data} = await axios.get(tag? `${url}&tag=${tag}` : url);
       const imgSource  = data.data.images.downsized_large.url;
       setGif(imgSource);
       setLoading(false);

    }

    useEffect( () =>{
        fetchData('car');
    },[])
    
    return {gif,loading,fetchData};

}

export default useGif
