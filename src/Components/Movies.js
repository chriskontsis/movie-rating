import React, { Component } from "react";
import MovieList from "./MovieList";
import UserInput from "./UserInput";
import Ratings  from "./Ratings";

export default class Movies extends Component {
  state = { 
    step: 1,
    movieArr: [],
    userMovie: "",
    movieId: '',
    rottenScore: "",
    rottenAudience: "",
    imdbScore: "",
    metacritic: "",
    trakt: "",
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  handleMovieId = (input) => {
    this.setState({movieId: input});
  }
  handleMovieTitle = (input) => {
    this.setState({userMovie: input});
  }


  render() {
    const {step} = this.state;
    const {userMovie,movieArr,rottenScore,movieId,imdbScore,trakt, rottenAudience, metacritic} = this.state;
    const values = {userMovie,rottenScore,movieId,imdbScore,trakt, movieArr, rottenAudience, metacritic};

    switch(step){
        case 1:
            return (
               <UserInput
               nextStep={this.nextStep}
               handleChange={this.handleChange}
               values={ values }
               />
            )
        case 2:
            return (
           
                <MovieList
                prevStep = {this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={ values }
                handleMovieId = {this.handleMovieId}
                />
              
            )
        case 3:
            return (
                <Ratings
                prevStep = {this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={ values }
                 />
            )
        default:
            
    }
  }
}
