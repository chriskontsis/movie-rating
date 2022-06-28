import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

const Ratings = ({ nextStep, handleChange, values }) => {

  const [loading,setLoading] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://mdblist.p.rapidapi.com/',
    params: {i: values.movieId},
    headers: {
      'X-RapidAPI-Key': 'c08c6ad559msh3fc58389c3580cbp1c885bjsnd19cbe0c1972',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    }
  };
  
  const moviesFunc = async () => {   
    const data = await axios
    .request(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoading(true);
    })
}

useEffect(() => {
  moviesFunc()
},[])



return loading ? <div>Done</div> : <h1>Loading...</h1>
}

export default Ratings