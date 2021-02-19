import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
