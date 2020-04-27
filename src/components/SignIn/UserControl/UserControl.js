import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import styles from "./UserControl.module.scss";
import axios from "axios";
import config from '../../../config';

class UserControl extends Component {
  signOutHandler = (event) => {
    event.preventDefault();

    axios
      .delete(`${config.API_PATH}/sign_out`)
      .then((response) => {
        console.log(response);
        this.props.onSignOut();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    localStorage.removeItem("user");
  };

  render() {
    const { userName } = this.props;

    return (
      <Fragment>
        <div id="cucumber-welcome-user" className={styles.Welcome}>{`Welcome ${userName}`}</div>
        <button id="cucumber-share-button">
          <a href="/share">Share a movie</a>
        </button>
        <button id="cucumber-logout-button" type="submit" onClick={this.signOutHandler}>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserControl);
