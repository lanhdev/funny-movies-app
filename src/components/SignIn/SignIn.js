import React, { Component } from "react";
import SignInForm from "../SignIn/SignInForm/SignInForm";

import styles from "./SignIn.module.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signed_in: false,
    };
  }

  render() {
    const { signed_in } = this.state;

    return (
      <div className={styles.SignIn}>
        {signed_in ? <div>User Actions</div> : <SignInForm />}
      </div>
    );
  }
}

export default SignIn;
