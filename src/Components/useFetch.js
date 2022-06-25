import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url,userMovie) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://mdblist.p.rapidapi.com/",
    params: { s: {userMovie}},
    headers: {
      "X-RapidAPI-Key": "c08c6ad559msh3fc58389c3580cbp1c885bjsnd19cbe0c1972",
      "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  },[url]);

  return{data, loading, error};
}

export default useFetch;
