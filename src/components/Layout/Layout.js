import React, { Fragment } from "react";
import styles from "./Layout.module.scss";

const layout = (props) => (
  <Fragment>
    <div>Toolbar</div>
    <main className={styles.Content}>{props.children}</main>
  </Fragment>
);

export default layout;
