import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import MovieItem from './containers/MovieItem/MovieItem';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Toolbar</div>
        <MovieItem/>
      </Layout>
    );
  }
}

export default App;
