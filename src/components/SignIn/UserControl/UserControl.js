import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./UserControl.module.scss";
import axios from "axios";
import config from "../../../config";

class UserControl extends Component {
  signOutHandler = (event) => {
    event.preventDefault();
    const { history } = this.props;

    axios.delete(`${config.API_PATH}/sign_out`).then(() => {
      this.props.onSignOut();
    });
    localStorage.removeItem("user");
    history.push("/");
  };

  render() {
    const { userName } = this.props;

    return (
      <Fragment>
        <div
          id="cucumber-welcome-user"
          className={styles.Welcome}
        >{`Welcome ${userName}`}</div>
        <button id="cucumber-share-button">
          <a href="/share">Share a movie</a>
        </button>
        <button
          id="cucumber-logout-button"
          type="submit"
          onClick={this.signOutHandler}
        >
          Logout
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch({ type: "SIGN_OUT" }),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserControl));
