import React from "react";
import "../App.css";

const UserInput = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    nextStep();
  };

  return (
    <div id="page-container"> 
      <div id="img-container">
      <img id="landing-img" src={require("../imgs/Movie Night-amico.png")} />
      </div>

      <div id="form-container">

    
        <form id="container-items">
          <h1 id="title">Enter A Movie <br /></h1>
          <input id="input-form"
            type="text"
            placeholder="Enter a movie"
            value={values.userMovie}
            onChange={handleChange("userMovie")}
          /> <br />
          <button id="next-button" onClick={Continue}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
