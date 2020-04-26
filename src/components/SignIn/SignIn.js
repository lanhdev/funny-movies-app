import React, { Component } from "react";
import SignInForm from "../SignIn/SignInForm/SignInForm";
import UserControl from "../SignIn/UserControl/UserControl";

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
        {signed_in ? <UserControl /> : <SignInForm />}
      </div>
    );
  }
}

export default SignIn;
