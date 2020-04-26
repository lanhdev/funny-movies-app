import React from "react";
import styles from "./MovieInfo.module.scss";

const MovieInfo = ({ title, author, description }) => {
  if (!title) {
    return null;
  }

  return (
    <div className={styles.MovieInfo}>
      <div className={styles.MovieTitle}>{title}</div>
      <div className={styles.MovieAuthor}>{author}</div>
      <div className={styles.MovieDescriptionText}>'Description:</div>
      <div className={styles.MovieDescription}>{description}</div>
    </div>
  );
};

export default MovieInfo;
