/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import NavBar from "../components/navbar/index";
import Drawer from "../components/drawer/index";
import Routes from "../routes/index";
import { Route, Switch } from "react-router"
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>"
      <Route exact path="/" component={() => (<Redirect to="/analytics" />)} />
        <div>
          <NavBar />
          <Drawer />
          <div className="container">
            <br />
            <Routes />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;