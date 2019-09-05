import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import axios from "axios";
import { Home } from "./pages/home";
import { Users } from "./pages/users";
import { Menu } from "./components/menu";

const history = createBrowserHistory();
axios.defaults.baseURL = "https://swapi.co/api";

const App = () => (
  <Router history={history}>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
