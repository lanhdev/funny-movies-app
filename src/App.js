import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import MovieList from "./containers/MovieList/MovieList";

class App extends Component {
  render() {
    return (
      <Layout>
        <NavBar />
        <hr/>
        <MovieList />
      </Layout>
    );
  }
}

export default App;
