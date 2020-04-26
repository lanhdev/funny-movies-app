import React from "react";
import styles from "./MoviePlayer.module.scss";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

const MoviePlayer = ({ id }) => {
  if (!id) {
    return null;
  }

  const embedUrl = `${BASE_EMBED_URL}${id}`;

  return (
    <iframe
      className={styles.MovieFrame}
      src={embedUrl}
      frameBorder="0"
      title="player"
    />
  );
};

export default MoviePlayer;
