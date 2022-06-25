import React from 'react'
import axios from "axios";


const MovieList = ({ nextStep, handleChange, values }) => {

  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { s: values.userMovie},
    headers: {
      "X-RapidAPI-Key": "c08c6ad559msh3fc58389c3580cbp1c885bjsnd19cbe0c1972",
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    },
  };
  
  axios
      .request(options)
      .then((response) => {
        values.movieArr = response.data.search;
        console.log(values.movieArr)
      })
      .catch((error) => {
        console.log(error)
      })

  
  return (
    <h1>{values.movieArr[0].title}</h1>
  )
}

export default MovieList