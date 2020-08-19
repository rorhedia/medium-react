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

import Popular from "./screens/Popular";

function App() {
  let sticky = true;
  if (
    window.location.pathname !== "/home" &&
    window.location.pathname !== "/"
  ) {
    sticky = false;
  }

  return (
    <>
      <Router>
        <CustomHeader className={sticky ? "headerSticky" : ""} />
        <Switch>
          <Route exact path="/">
            <CustomNav />
            <Home />
          </Route>
          <Route exact path="/home">
            <CustomNav />
            <Home />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/momentum">
            <Coronavirus
              hederText="Medium Momentum Blog"
              subHeader="A Medium blog about the fight against anti-Black racism"
            />
          </Route>
          <Route path="/coronavirus">
            <Coronavirus
              hederText="Medium Coronavirus Blog"
              subHeader="A real-time resource for Covid-19 news"
            />
          </Route>
          <Route path="/onezero">
            <Coronavirus
              hederText="Medium Onezero Blog"
              subHeader="The undercurrents of the future. A Medium publication about tech and science"
            />
          </Route>
          <Route path="/elemental">
            <Coronavirus
              hederText="Medium Elemental Blog"
              subHeader="Your life, sourced by science. A Medium publication about health and wellness"
            />
          </Route>
          <Route path="/gen">
            <Coronavirus
              hederText="Medium Gen Blog"
              subHeader="What matters now. A Medium publication about politics, power, and culture."
            />
          </Route>
          <Route path="/zora">
            <Coronavirus
              hederText="Medium Zora Blog"
              subHeader="Unapologetic. Ours. A Medium publication for women of color."
            />
          </Route>
          <Route path="/forge">
            <Coronavirus
              hederText="Medium Forge Blog"
              subHeader="Beat yesterday. A Medium publication about personal development"
            />
          </Route>
          <Route path="/human">
            <Coronavirus
              hederText="Medium Human Parts Blog"
              subHeader="When a Tomato Becomes a Luxury"
            />
          </Route>
          <Route path="/marker">
            <Coronavirus
              hederText="Medium Marker Blog"
              subHeader="Making you smarter about business. A publication from Medium."
            />
          </Route>
          <Route path="/level">
            <Coronavirus
              hederText="Medium Level Blog"
              subHeader="I’m Not Your Poster Child for Workplace Diversity"
            />
          </Route>
          <Route path="/heated">
            <Coronavirus
              hederText="Medium Heated Blog"
              subHeader="When a Tomato Becomes a Luxury"
            />
          </Route>
          <Route path="/more">
            <Coronavirus
              hederText="Medium More Blog"
              subHeader="When a Tomato Becomes a Luxury"
            />
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
