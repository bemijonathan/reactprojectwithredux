import React from "react";
import Notify from "./notification";
import List from "../projects/projectlist";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m5">
            <List />
          </div>
          <div className="col s12 m6 offset-m1">
            <Notify />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
