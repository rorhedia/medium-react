import React from "react";

import "./App.css";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import CustomHeader from "./components/CustomHeader";
import CustomNav from "./components/CustomNav";

// Screens
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import CustomForm from "./screens/CustomForm/";
import Coronavirus from "./screens/Coronavirus/";

function App() {
  let isVisible = true;
  if (
    window.location.pathname !== "/home" &&
    window.location.pathname !== "/"
  ) {
    isVisible = false;
  }

  return (
    <>
      <CustomHeader />
      {isVisible ? <CustomNav /> : null}

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/popular">
            <h1>POPULAR</h1>
          </Route>
          <Route path="/momentum">
            <h1>MOMENTUM</h1>
          </Route>
          <Route path="/coronavirus">
            <Coronavirus />
          </Route>
          <Route path="/onezero">
            <h1>ONEZERO</h1>
          </Route>
          <Route path="/elemental">
            <h1>ELEMENTAL</h1>
          </Route>
          <Route path="/gen">
            <h1>GEN</h1>
          </Route>
          <Route path="/zora">
            <h1>ZORA</h1>
          </Route>
          <Route path="/forge">
            <h1>FORGE</h1>
          </Route>
          <Route path="/human-parts">
            <h1>HUMAN PARTS</h1>
          </Route>
          <Route path="/marker">
            <h1>MARKER</h1>
          </Route>
          <Route path="/level">
            <h1>LEVEL</h1>
          </Route>
          <Route path="/heated">
            <h1>HEATED</h1>
          </Route>
          <Route path="/more">
            <h1>MORE</h1>
          </Route>
          <Route path="/post">
            <CustomForm />
          </Route>
          <Route path="/blog/:id">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
