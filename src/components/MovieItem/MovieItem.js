import React from "react";
import MoviePlayer from "./MoviePlayer/MoviePlayer";
import MovieInfo from "./MovieInfo/MovieInfo";

import styles from "./MovieItem.module.scss";

const MovieItem = ({ movie_id, author }) => {
  if (!movie_id) {
    return null;
  }

  return (
    <div className={styles.MovieItem}>
      <MoviePlayer movie_id={movie_id} />
      <MovieInfo
        title="TENET - Official Trailer"
        author={author}
        description="asdfhasdgfhgasdjkfhasdjk"
      />
    </div>
  );
};

export default MovieItem;
