import React, { Component, Fragment } from 'react';

import MovieInfo from '../../components/Movie/MovieInfo/MovieInfo';

class MovieItem extends Component {
  render () {
    return (
      <Fragment>
        <div>Movie Player</div>
        <MovieInfo/>
      </Fragment>
    );
  }
}

export default MovieItem;
