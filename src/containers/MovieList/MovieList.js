import React, { Component, Fragment } from "react";
import axios from "axios";

import MovieItem from "../../components/MovieItem/MovieItem";

class MovieList extends Component {
  state = {
    movieItems: [],
  };

  componentDidMount() {
    axios.get("http://funny-movies-api.test/movies").then((response) => {
      this.setState({ movieItems: response.data });
    });
  }

  render() {
    const movieItems = this.state.movieItems.map((movieItem) => {
      const url = movieItem.url.split("=")[1];
      return (
        <MovieItem
          key={movieItem.id}
          movie_id={url}
          author={movieItem.username}
        />
      );
    });

    return <Fragment>{movieItems}</Fragment>;
  }
}

export default MovieList;
