import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { PageContainer } from "./components/PageContainer";
import styles from "./styles/App.module.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import ProfessionalSkills from "./views/Professionalskills";
import Beheersingsniveaus from "./views/Beheersingsniveaus"
import Hboi from "./views/Hboi";
import RedirectHboi from "./views/RedirectHboi";
import Vaardigheden from "./views/Vaardigheden";
import { Layout } from "antd";
import PageHeader from './components/Header'


const { Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)

  function toggleCollapsed () {
    setCollapsed(value => !value)
  }


  return <Router>
    <Layout 
      className={styles.pageContainer} 
    >
      <PageHeader
        collapsed={collapsed}
        toggleCollapsed={toggleCollapsed}
      />
      <Layout>
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          // style={{ overflow: 'auto', height: '', position: 'sticky', top: 0, left: 0, }}
          breakpoint="lg"
          collapsedWidth="0"
          theme="light"
        >
          <Navbar toggleCollapsed={toggleCollapsed} />
        </Sider>
        <Content>
          <PageContainer className={styles.contentWrap}>
            <Switch>
              <Route exact path="/">
                <Hboi />
              </Route>
              <Route path='/vaardigheden'>
                <Vaardigheden />
              </Route>
              <Route path='/beheersingsniveaus'>
                <Beheersingsniveaus />
              </Route>
              <Route path='/professionalskills'>
                <ProfessionalSkills />
              </Route>
              <Route path='/hboi/:architectuurlaag/:activiteit'>
                <RedirectHboi />
              </Route>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
          </PageContainer>
        </Content>
      </Layout>
    </Layout>
  </Router>
}

export default App;
