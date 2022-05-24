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
  const [selectedKey, setSelectedKey] = useState("Beroepsproduct")
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
          <TopicMenu 
            selectedKey={selectedKey} 
            setSelectedKey={setSelectedKey} 
          />
        </Sider>
        <Content>
            <Switch>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="Beroepsproduct"
                collapsed={collapsed}
                path="/"
                exact
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <Hboi />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="Vaardigheden"
                collapsed={collapsed}
                path='/vaardigheden'
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <Vaardigheden />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="Beheersingsniveaus"
                collapsed={collapsed}
                path='/beheersingsniveaus'
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <Beheersingsniveaus />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="Professional Skills"
                collapsed={collapsed}
                path='/professionalskills'
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <ProfessionalSkills />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="Beroepsproduct"
                collapsed={collapsed}
                path='/hboi/:architectuurlaag/:activiteit'
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <RedirectHboi />
              </CustomRoute>
              <CustomRoute 
                showBackIcon={breakpoint}
                pageTitle="404"
                collapsed={collapsed}
                path='*'
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
              >
                <PageNotFound />
              </CustomRoute>
            </Switch>
        </Content>
      </Layout>
  </Router>
}

export default App;
