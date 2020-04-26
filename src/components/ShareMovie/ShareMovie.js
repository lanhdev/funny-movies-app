import React, { Component } from "react";

import styles from "./ShareMovie.module.scss";

class ShareMovie extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <div className={styles.Box}>
          <div className={styles.BoxTitle}>Share a YouTube movie</div>
          <form>
            <label for="youtube-url">YouTube URL:</label>
            <input
              className={styles.UrlInput}
              id="youtube-url"
              type="text"
              name="url"
              placeholder="Your YouTube URL"
              required
            />
            <button type="submit">Share</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ShareMovie;
