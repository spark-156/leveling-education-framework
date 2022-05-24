import React, { useState } from "react";
import { TopicMenu } from "./components/TopicMenu";

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import PageNotFound from "./views/PageNotFound";
import ProfessionalSkills from "./views/Professionalskills";
import Beheersingsniveaus from "./views/Beheersingsniveaus"
import Hboi from "./views/Hboi";
import RedirectHboi from "./views/RedirectHboi";
import Vaardigheden from "./views/Vaardigheden";
import { Layout } from "antd";
import CustomRoute from "./components/CustomRoute";
import styles from './styles/App.module.css'

const { Sider, Content } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [breakpoint, setBreakpoint] = useState(true)

  return <Router>
      <Layout>
        <Sider
          onBreakpoint={broken => {setBreakpoint(broken); setCollapsed(broken)}}
          collapsible
          trigger={null}
          collapsed={collapsed}
          breakpoint="lg"
          className={styles.sider}
          collapsedWidth="0"
          theme="light"
        >
          <TopicMenu />
        </Sider>
        <Content>
            <Switch>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path="/"
                exact
              >
                <Hboi />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path='/vaardigheden'
              >
                <Vaardigheden />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path='/beheersingsniveaus'
              >
                <Beheersingsniveaus />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path='/professionalskills'
              >
                <ProfessionalSkills />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path='/hboi/:architectuurlaag/:activiteit'
              >
                <RedirectHboi />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                collapsed={collapsed}
                path='*'
              >
                <PageNotFound />
              </CustomRoute>
            </Switch>
        </Content>
      </Layout>
  </Router>
}

export default App;
