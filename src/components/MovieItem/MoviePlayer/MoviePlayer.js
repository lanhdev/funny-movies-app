import React from "react";
import styles from "./MoviePlayer.module.scss";

import config from '../../../config';

const MoviePlayer = ({ movieId }) => {
  if (!movieId) {
    return null;
  }

  const embedUrl = `${config.BASE_EMBED_URL}${movieId}`;

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
