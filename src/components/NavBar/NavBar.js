import React, { Component } from "react";
import Logo from "../Logo/Logo";

import styles from "./NavBar.module.scss";

class NavBar extends Component {
  render() {
    return (
      <header className={styles.NavBar}>
        <Logo />
        <div>Sign In</div>
      </header>
    );
  }
}

export default NavBar;
