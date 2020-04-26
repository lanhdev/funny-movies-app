import React, { Component, Fragment } from "react";

import styles from "./UserControl.module.scss";

class UserControl extends Component {
  render() {
    const { username } = this.props;

    return (
      <Fragment>
        <div className={styles.Welcome}>{`Welcome ${username}`}</div>
        <button>
          <a href="/share">Share a movie</a>
        </button>
        <button>Logout</button>
      </Fragment>
    );
  }
}

export default UserControl;
