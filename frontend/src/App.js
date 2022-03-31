import React from "react";
import { Navbar } from "./components/Navbar";
import { Container } from "./components/Container";
import styles from "./styles/App.module.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return <Router>
      <div className={styles.pageContainer}>
        <Navbar />
        <Container className={styles.contentWrap}>
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
        </Container>
        <Footer />
      </div>
  </Router>
}

export default App;
