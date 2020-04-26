import React from "react";
import styles from "./MovieInfo.module.css";

const MovieInfo = (props) => {
  return (
    <div className={styles.MovieInfo}>
      <div className={styles.MovieTitle}>{props.title}</div>
      <div className={styles.MovieAuthor}>{props.author}</div>
      <div className={styles.MovieDescriptionText}>Description:</div>
      <div className={styles.MovieDescription}>{props.description}</div>
    </div>
  );
};

export default MovieInfo;
