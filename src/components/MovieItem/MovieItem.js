import React, { Component } from "react";
import MoviePlayer from "./MoviePlayer/MoviePlayer";
import MovieInfo from "./MovieInfo/MovieInfo";

import styles from "./MovieItem.module.scss";
import axios from "axios";
import config from "../../config";

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
          `${config.YOUTUBE_API_URL}?id=${this.props.youtubeVideoId}&key=${config.YOUTUBE_API_KEY}&part=snippet`
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
