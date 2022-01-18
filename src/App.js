import React from "react";
import { Switch, Route } from "react-router-dom";
import Bar from "./components/bar/Bar.component";
import Welcome from "./pages/welcome/Welcome.component";
import Dashboard from "./pages/dashboard/Dashboard.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    console.log("App");
    this.state = {
      invitado: "",
    };
  }

  render() {
    return (
      <div>
        <Bar />

        <Switch>
          <Route path="/" component={Welcome} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
