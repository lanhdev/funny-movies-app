import React from "react";
import styles from "./Logo.module.scss";
import AppLogo from "../../assets/images/youtube.svg";

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={AppLogo} alt="AppLogo" />
    <a href='/'>Funny Movies</a>
  </div>
);

export default logo;
