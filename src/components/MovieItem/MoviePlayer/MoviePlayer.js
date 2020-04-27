import React from "react";
import styles from "./MoviePlayer.module.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

const MoviePlayer = ({ movie_id }) => {
  if (!movie_id) {
    return null;
  }

  const embedUrl = `${BASE_EMBED_URL}${movie_id}`;

  return (
    <div>
      <iframe
        className={styles.MovieFrame}
        src={embedUrl}
        frameBorder="0"
        title="player"
      />
    </div>
  );
};

export default MoviePlayer;
