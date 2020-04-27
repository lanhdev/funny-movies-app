import React, { Component } from "react";
import { connect } from "react-redux";

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
        const { id: userId, username: userName } = response.data;
        const authToken = response.headers.authorization.split(" ")[1];

        this.props.onSignIn({
          id: userId,
          username: userName,
          authToken: authToken,
          isSignedIn: true,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
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

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (payload) => dispatch({ type: "SIGN_IN", payload: payload }),
  };
};

export default connect(null, mapDispatchToProps)(SignInForm);
