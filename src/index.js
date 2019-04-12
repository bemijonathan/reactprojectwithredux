import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import "./styles.css";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route Path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
