import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

import styles from "./ShareMovie.module.scss";
import axios from "axios";
import config from '../../config';

class ShareMovie extends Component {
  state = {
    url: "",
  };

  shareMovieHandler = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const shareMovieData = {
      url: this.state.url,
    };
    const axiosConfig = {
      headers: {
        Authorization: "Bearer " + this.props.authToken,
      },
    };

    axios
      .post(`${config.API_PATH}/movies`, shareMovieData, axiosConfig)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    history.push('/');
  };

  render() {
    const { isSignedIn } = this.props;

    if (!isSignedIn) {
      return null;
    }

    return (
      <div className={styles.Container}>
        <div className={styles.Box}>
          <div className={styles.BoxTitle}>Share a YouTube movie</div>
          <form>
            <label htmlFor="youtube-url">YouTube URL:</label>
            <input
              className={styles.UrlInput}
              id="youtube-url"
              type="text"
              name="url"
              placeholder="Your YouTube URL"
              required
              onChange={(event) => this.setState({ url: event.target.value })}
            />
            <button type="submit" onClick={this.shareMovieHandler}>
              Share
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.currentUser.isSignedIn,
    authToken: state.currentUser.authToken,
  };
};

export default withRouter(connect(mapStateToProps)(ShareMovie));
