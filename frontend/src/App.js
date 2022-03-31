import React from "react";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <div>hboi here</div>
          </Route>
        <Route path='/vaardigheden'>
          <div>vaardigheden here</div>
        </Route>
        <Route path='/beheersingsniveaus'>
          <div>beheersingsniveaus here</div>
        </Route>
        <Route path='/professionalskills'>
          <div>professionalskills here</div>
        </Route>
      </Switch>
  </Router>
}

export default App;
