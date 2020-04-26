import React, { Component } from "react";
import MoviePlayer from "../../components/Movie/MoviePlayer/MoviePlayer";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";

class MovieItem extends Component {
  render() {
    return (
      <div>
        <MoviePlayer />
        <MovieInfo />
      </div>
    );
  }
}

export default MovieItem;
