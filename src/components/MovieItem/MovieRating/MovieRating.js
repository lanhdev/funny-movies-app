import React, { Component } from "react";
import Axios from "axios";
import config from "../../../config";
import { connect } from "react-redux";

class MovieRating extends Component {
  state = {
    likesCount: 0,
    dislikesCount: 0,
    likeButtonDisabled: false,
    dislikeButtonDisabled: false,
    currentUserRating: undefined,
  };

  componentDidMount() {
    const { likesCount, dislikesCount, userRating } = this.props;

    if (userRating === undefined) {
      this.setState({
        ...this.state,
        likesCount: likesCount,
        dislikesCount: dislikesCount,
      });
      return;
    }

    if (userRating.like === true) {
      this.setState({
        ...this.state,
        likesCount: likesCount,
        dislikesCount: dislikesCount,
        likeButtonDisabled: false,
        dislikeButtonDisabled: true,
        currentUserRating: userRating,
      });
    } else {
      this.setState({
        ...this.state,
        likesCount: likesCount,
        dislikesCount: dislikesCount,
        likeButtonDisabled: true,
        dislikeButtonDisabled: false,
        currentUserRating: userRating,
      });
    }
  }

  likeHandler = (event) => {
    event.preventDefault();
    const { movieId, authToken } = this.props;
    const { likesCount, currentUserRating } = this.state;
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    if (currentUserRating === undefined) {
      const ratingParams = {
        like: true,
      };

      Axios.post(
        `${config.API_PATH}/movies/${movieId}/ratings`,
        ratingParams,
        axiosConfig
      ).then((response) => {
        const rating = response.data;
        this.setState({
          ...this.state,
          likesCount: likesCount + 1,
          likeButtonDisabled: false,
          dislikeButtonDisabled: true,
          currentUserRating: rating,
        });
      });
    } else {
      Axios.delete(
        `${config.API_PATH}/ratings/${currentUserRating.id}`,
        axiosConfig
      ).then(() => {
        this.setState({
          ...this.state,
          likesCount: likesCount - 1,
          likeButtonDisabled: false,
          dislikeButtonDisabled: false,
          currentUserRating: undefined,
        });
      });
    }
  };

  dislikeHandler = (event) => {
    event.preventDefault();
    const { movieId, authToken } = this.props;
    const { dislikesCount, currentUserRating } = this.state;
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    if (currentUserRating === undefined) {
      const ratingParams = {
        like: false,
      };

      Axios.post(
        `${config.API_PATH}/movies/${movieId}/ratings`,
        ratingParams,
        axiosConfig
      ).then((response) => {
        const rating = response.data;
        this.setState({
          ...this.state,
          dislikesCount: dislikesCount + 1,
          likeButtonDisabled: true,
          dislikeButtonDisabled: false,
          currentUserRating: rating,
        });
      });
    } else {
      Axios.delete(
        `${config.API_PATH}/ratings/${currentUserRating.id}`,
        axiosConfig
      ).then(() => {
        this.setState({
          ...this.state,
          dislikesCount: dislikesCount - 1,
          likeButtonDisabled: false,
          dislikeButtonDisabled: false,
          currentUserRating: undefined,
        });
      });
    }
  };

  render() {
    const {
      likesCount,
      dislikesCount,
      likeButtonDisabled,
      dislikeButtonDisabled,
    } = this.state;

    return (
      <div>
        <button
          type="submit"
          disabled={likeButtonDisabled}
          onClick={this.likeHandler}
        >
          Like
        </button>
        <label>{likesCount}</label>
        <button
          type="submit"
          disabled={dislikeButtonDisabled}
          onClick={this.dislikeHandler}
        >
          Dislike
        </button>
        <label>{dislikesCount}</label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authToken } = state.currentUser;
  return {
    authToken: authToken,
  };
};

export default connect(mapStateToProps)(MovieRating);
