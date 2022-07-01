import React from "react";
import "../App.css";

const UserInput = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    nextStep();
  };

  return (
    <div id="page-container">
      <div>
      <img id="landing-img" src={require("../imgs/Movie Night-amico.png")} />
      </div>

      <div id="form-container">
        <form>
          Enter A Movie
          <input
            type="text"
            placeholder="Enter a movie"
            value={values.userMovie}
            onChange={handleChange("userMovie")}
          />
          <button onClick={Continue}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default UserInput;
