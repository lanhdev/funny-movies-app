import React from "react";
import styles from "./MoviePlayer.module.css";

const BASE_EMBED_URL = "https://www.youtube.com/embed/";

const MoviePlayer = ({ id }) => {
  if (!id) {
    return null;
  }

  const embedUrl = `${BASE_EMBED_URL}${id}`;

  return (
    <div className={styles.MoviePlayer}>
      <iframe
        width="560"
        height="315"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="player"
      />
    </div>
  );
};

export default MoviePlayer;
