import React, { Component, Fragment } from "react";
import MovieItem from "../../components/MovieItem/MovieItem";

import axios from "axios";
import config from '../../config';

class MovieList extends Component {
  state = {
    movieItems: [],
  };

  componentDidMount() {
    axios.get(`${config.API_PATH}/movies`).then((response) => {
      const movieItems = response.data;
      const updateMovieItems = movieItems.map((movieItem) => {
        return {
          ...movieItem,
          url: movieItem.url.split("=")[1],
        };
      });
      this.setState({
        ...this.state,
        movieItems: updateMovieItems
      });
    });
  }

  render() {
    const movieItems = this.state.movieItems.map((movieItem) => {
      return (
        <MovieItem
          key={movieItem.id}
          movie_id={movieItem.url}
          author={movieItem.username}
        />
      );
    });

    return <Fragment>{movieItems}</Fragment>;
  }
}

export default MovieList;
