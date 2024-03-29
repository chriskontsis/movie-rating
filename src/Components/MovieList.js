import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useControlled } from "@material-ui/core";
import "../App.css";

const MovieList = ({ nextStep, handleChange, values, handleMovieId, handleMovieTitle }) => {
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { s: values.userMovie },
    headers: {
      'X-RapidAPI-Key': '01ad4947e8msh860e50317e3c7b4p1a2bf2jsn0893ecd391e6',
      'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    },
  };

  const movieList = values.movieArr.slice(0, 10).map((movie) => {
    return (
        <div style={{border:  '1px solid black', textAlign: 'center', display: 'flex', alignItems: "center", justifyContent: "center",
        padding: '10px 0'}}>
          <li
            onClick={() => {
              toggleClick(movie.imdbid);
              handleMovieId(movie.imdbid);
              handleMovieTitle(movie.tite);
            }}
            key={movie.imdbid}
            style={{listStyle: 'none', cursor:"pointer"}}
          >
            {movie.title}
          </li>
          <br />
        </div>
    );
  });

  const toggleClick = (input) => {
    nextStep();
  };

  const moviesFunc = async () => {
    const data = await axios
      .request(options)
      .then((response) => {
        values.movieArr = response.data.search;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(true);
      });
  };

  useEffect(() => {
    moviesFunc();
  }, []);

  return loading ? (
    <div>
      <div id="movieList-Container">
        <div id="moveList-items">
          {movieList}
        </div>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};


export default MovieList;
