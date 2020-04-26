import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import MovieList from "./containers/MovieList/MovieList";

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Toolbar</div>
        <MovieList />
      </Layout>
    );
  }
}

export default App;
