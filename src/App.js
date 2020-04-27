import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import MovieList from "./containers/MovieList/MovieList";
import ShareMovie from "./components/ShareMovie/ShareMovie";

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <NavBar />
          <hr />
          <Switch>
            <Route exact path="/" component={withRouter(MovieList)}></Route>
            <Route
              exact
              path="/share"
              component={withRouter(ShareMovie)}
            ></Route>
          </Switch>
        </Router>
      </Layout>
    );
  }
}

export default App;
