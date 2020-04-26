import React, { Component } from "react";
import styles from "./SignInForm.module.scss";

class SignInForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            className={styles.UserName}
            type="text"
            name="username"
            placeholder="username"
            required
          />
          <input
            className={styles.Password}
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button type="submit">Sign In / Register</button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
