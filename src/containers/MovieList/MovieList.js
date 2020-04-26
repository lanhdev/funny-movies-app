import React, { Component, Fragment } from "react";

import MovieItem from "../../components/MovieItem/MovieItem";

const movieItems = [{ id: "LdOM0x0XDMo" }, { id: "sfM7_JLk-84" }];

class MovieList extends Component {
  render() {
    return (
      <Fragment>
        {movieItems.map((item) => (
          <MovieItem key={item.id} movie_id={item.id} />
        ))}
      </Fragment>
    );
  }
}

export default MovieList;
