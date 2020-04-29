import React, { Component } from "react";
import MoviePlayer from "./MoviePlayer/MoviePlayer";
import MovieInfo from "./MovieInfo/MovieInfo";

import styles from "./MovieItem.module.scss";
import axios from "axios";

class MovieItem extends Component {
  state = {
    movieTitle: "",
    movieDescription: "",
  };

  componentDidMount() {
    const { youtubeVideoId } = this.props;
    if (youtubeVideoId) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?id=${this.props.youtubeVideoId}&key=AIzaSyBS5QAF7S5mw3Ba4x--AfW3T40CjWRK5jQ&part=snippet`
        )
        .then((response) => {
          const movieData = response.data.items[0].snippet;
          this.setState({
            ...this.state,
            movieTitle: movieData.title,
            movieDescription: movieData.description,
          });
        });
    }
  }

  render() {
    if (!this.props.youtubeVideoId) {
      return null;
    }

    const { youtubeVideoId, author } = this.props;
    const { movieTitle, movieDescription } = this.state;

    return (
      <div id="cucumber-movie-item" className={styles.MovieItem}>
        <MoviePlayer youtubeVideoId={youtubeVideoId} />
        <MovieInfo
          title={movieTitle}
          author={author}
          description={movieDescription}
        />
      </div>
    );
  }
}

export default MovieItem;
