import React, { Component } from "react";
import MoviePlayer from "./MoviePlayer/MoviePlayer";
import MovieInfo from "./MovieInfo/MovieInfo";

import styles from "./MovieItem.module.scss";
import axios from "axios";
import config from "../../config";
import MovieComment from "./MovieComment/MovieComment";
import MovieRating from "./MovieRating/MovieRating";
import { connect } from "react-redux";

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

    const {
      movieId,
      youtubeVideoId,
      author,
      likesCount,
      dislikesCount,
      ratings,
      userId,
    } = this.props;
    const { movieTitle, movieDescription } = this.state;

    const userRating = ratings.find(({ user_id }) => user_id === userId);

    return (
      <div id="cucumber-movie-item" className={styles.MovieItem}>
        <MoviePlayer youtubeVideoId={youtubeVideoId} />
        <MovieInfo
          title={movieTitle}
          author={author}
          description={movieDescription}
        />
        <MovieComment movieId={movieId} />
        <MovieRating
          movieId={movieId}
          likesCount={likesCount}
          dislikesCount={dislikesCount}
          userRating={userRating}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { id: userId } = state.currentUser;
  return {
    userId: userId,
  };
};

export default connect(mapStateToProps)(MovieItem);
