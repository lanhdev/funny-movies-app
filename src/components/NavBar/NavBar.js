import React, { Component } from "react";
import Logo from "../Logo/Logo";
import SignIn from '../SignIn/SignIn';

import styles from "./NavBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <header className={styles.NavBar}>
        <Logo />
        <SignIn />
      </header>
    );
  }
}

export default NavBar;
