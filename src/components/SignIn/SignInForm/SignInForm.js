import React, { Component } from "react";
import styles from "./SignInForm.module.scss";

import axios from "axios";

class SignInForm extends Component {
  state = {
    username: "",
    password: "",
  };

  signInHandler = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userData = {
      user: {
        username: username,
        password: password,
      },
    };

    axios
      .post("http://funny-movies-api.test/sign_in", userData)
      .then((response) => {
        console.log(response.headers.authorization.split(' ')[1]);
      });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form>
          <input
            className={styles.UserName}
            type="text"
            name="username"
            placeholder="username"
            required
            value={username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <input
            className={styles.Password}
            type="password"
            name="password"
            placeholder="password"
            required
            value={password}
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button type="submit" onClick={this.signInHandler}>
            Log In / Register
          </button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
