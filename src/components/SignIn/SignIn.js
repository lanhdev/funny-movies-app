import React, { Component } from "react";
import { connect } from "react-redux";
import SignInForm from "../SignIn/SignInForm/SignInForm";
import UserControl from "../SignIn/UserControl/UserControl";

import styles from "./SignIn.module.scss";

export class SignIn extends Component {
  render() {
    const { isSignedIn } = this.props;

    return (
      <div id="cucumber-user-section" className={styles.SignIn}>
        {isSignedIn ? <UserControl /> : <SignInForm />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.currentUser.isSignedIn,
  };
};

export default connect(mapStateToProps)(SignIn);
