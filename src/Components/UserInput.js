import React from "react";

const UserInput = ({ nextStep, handleChange, values }) => {
    const Continue = e => {
        nextStep();
      }

  return (
    <label>
      Movie
      <input
        type="text"
        placeholder="Enter a movie"
        value={values.userMovie}
        onChange={handleChange('userMovie')}
      />
      <button onClick={ Continue }>Next</button>
    </label>
    
  );
};

export default UserInput;
