import React from "react";

import styles from "./Unauthorized.module.scss";

const unauthorized = () => {
  return (
    <div id="cucumber-unauthorized-text" className={styles.Unauthorized}>
      <h2>
        401 UNAUTHORIZED
        <br />
        ACCESS IS ALLOWED ONLY FOR REGISTERED USERS
      </h2>
    </div>
  );
};

export default unauthorized;
