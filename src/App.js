import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import AddEmployee from "./components/addEmployee";
import EditEmployee from "./components/editEmployee";
import Home from "./components/home";
import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/edit/:id" component={EditEmployee} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
