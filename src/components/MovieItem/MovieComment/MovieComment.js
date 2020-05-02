import React, { Component } from "react";
import Axios from "axios";
import config from "../../../config";
import { connect } from "react-redux";

class MovieComment extends Component {
  state = {
    movieComments: [],
    movieComment: "",
  };

  componentDidMount() {
    const { movieId } = this.props;

    Axios.get(`${config.API_PATH}/movies/${movieId}/comments`).then(
      (response) => {
        const movieComments = response.data;
        this.setState({ ...this.state, movieComments: movieComments });
      }
    );
  }

  commentFormHandler = (event) => {
    this.setState({ ...this.state, movieComment: event.target.value });
  };

  postCommentHandler = (event) => {
    event.preventDefault();
    const { movieId, authToken } = this.props;
    const { movieComments, movieComment } = this.state;
    const commentParams = {
      content: movieComment,
    };
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };

    Axios.post(
      `${config.API_PATH}/movies/${movieId}/comments`,
      commentParams,
      axiosConfig
    ).then((response) => {
      const newMovieComment = response.data;
      const updateMovieComments = [newMovieComment].concat(movieComments);
      this.setState({
        ...this.state,
        movieComments: updateMovieComments,
        movieComment: "",
      });
    });
  };

  render() {
    const movieComments = this.state.movieComments.map((movieComment) => {
      return <p key={movieComment.id}>{movieComment.content}</p>;
    });
    const { isSignedIn } = this.props;

    return (
      <div>
        {movieComments}
        {isSignedIn && (
          <form>
            <input
              type="text"
              name="comment-form"
              placeholder="Your comment"
              required
              value={this.state.movieComment}
              onChange={this.commentFormHandler}
            />
            <button type="submit" onClick={this.postCommentHandler}>
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authToken, isSignedIn } = state.currentUser;
  return {
    authToken: authToken,
    isSignedIn: isSignedIn,
  };
};

export default connect(mapStateToProps)(MovieComment);
