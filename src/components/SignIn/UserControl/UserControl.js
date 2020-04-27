import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import styles from "./UserControl.module.scss";

class UserControl extends Component {
  render() {
    const { userName } = this.props;

    return (
      <Fragment>
        <div className={styles.Welcome}>{`Welcome ${userName}`}</div>
        <button>
          <a href="/share">Share a movie</a>
        </button>
        <button>Logout</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.userName
  };
};

export default connect(mapStateToProps)(UserControl);
