import React, { Component } from "react";
import MoviePlayer from "../../components/Movie/MoviePlayer/MoviePlayer";
import MovieInfo from "../../components/Movie/MovieInfo/MovieInfo";

import styles from "./MovieItem.module.scss";

class MovieItem extends Component {
  render() {
    return (
      <div className={styles.MovieItem}>
        <MoviePlayer id="LdOM0x0XDMo" />
        <MovieInfo
          title="TENET - Official Trailer"
          author="Shared by: bolobala"
          description="asdfhasdgfhgasdjkfhasdjk"
        />
      </div>
    );
  }
}

export default MovieItem;
