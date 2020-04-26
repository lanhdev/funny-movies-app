import React from "react";
import styles from "./MovieInfo.module.css";

const MovieInfo = ({ title, author, showDescription = false, description }) => {
  return (
    <div className={styles.MovieInfo}>
      <div className={styles.MovieTitle}>{title}</div>
      <div className={styles.MovieAuthor}>{author}</div>
      <div className={styles.MovieDescriptionText}>{showDescription ? 'Description:' : ''}</div>
      <div className={styles.MovieDescription}>{description}</div>
    </div>
  );
};

export default MovieInfo;
