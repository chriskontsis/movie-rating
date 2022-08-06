import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const Ratings = ({ nextStep, handleChange, values }) => {
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { i: values.movieId },
    headers: {
      'X-RapidAPI-Key': '01ad4947e8msh860e50317e3c7b4p1a2bf2jsn0893ecd391e6',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    },
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
        console.log(error);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  useEffect(() => {
    movieData();
  }, []);

  return loading ? (
    <div id="critic-wrapper">
      <div id="critic-contents">
      <div>
        <h1 id="movie-name">{values.userMovie.toUpperCase()}</h1>
        <p>imbd: {values.imdbScore}</p>
        <p>rotten: {values.rottenScore}</p>
        <p>rottenAudience: {values.rottenAudience}</p>
        <p>trakt: {values.trakt}</p>
        <p>metacritic: {values.metacritic}</p>
      </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Ratings;
