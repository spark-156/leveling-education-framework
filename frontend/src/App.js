import React from "react";
import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import styles from "./styles/App.module.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Footer } from "./components/Footer";
import PageNotFound from "./views/PageNotFound";
import ProfessionalSkills from "./views/Professionalskills";
import Beheersingsniveaus from "./views/Beheersingsniveaus"

function App() {
  return <Router>
      <div className={styles.pageContainer}>
        <Navbar />
        <PageContainer className={styles.contentWrap}>
          <Switch>
            <Route exact path="/">
                <div>hboi here</div>
              </Route>
            <Route path='/vaardigheden'>
              <div>vaardigheden here</div>
            </Route>
            <Route path='/beheersingsniveaus'>
              <Beheersingsniveaus />
            </Route>
            <Route path='/professionalskills'>
              <ProfessionalSkills />
            </Route>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </PageContainer>
        <Footer />
      </div>
  </Router>
}

export default App;
