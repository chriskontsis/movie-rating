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
  
  const movieData = async () => {   
    const data = await axios
    .request(options)
    .then((response) => {
      values.rottenScore = response.data.ratings[4].value;
      values.imdbScore = response.data.ratings[0].value;
      values.trakt = response.data.ratings[3].value;
      values.rottenAudience = response.data.ratings[5].value;
      values.metacritic = response.data.ratings[1].value;
    })
    .catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoading(true);
    })
}

useEffect(() => {
  movieData()
},[])





return loading ? 
<div>
  <h1>{values.userMovie}</h1>
  <p>{values.imdbScore}</p>
  <p>{values.rottenScore}</p>
  <p>{values.rottenAudience}</p>
  <p>{values.trakt}</p>
  <p>{values.metacritic}</p>
</div> 

: <h1>Loading...</h1>
}

export default Ratings