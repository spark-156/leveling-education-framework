import React from "react";
import { TopicMenu } from "./components/TopicMenu";
import { ScrollToTop } from "./components/ScrollToTop";
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
import { useSelector, useDispatch } from "react-redux";
import { setBreakpoint, selectBreakpoint } from "./store/breakpointSlice";

const { Sider, Content } = Layout

function App() {
  const breakpoint = useSelector(selectBreakpoint)
  const dispatch = useDispatch()

  return <Router>
    <ScrollToTop />
    <Layout>
      <Sider
        onBreakpoint={value => dispatch(setBreakpoint(value))}
        collapsible
        trigger={null}
        collapsed={breakpoint}
        breakpoint="lg"
        style={{ position: "sticky", background: "#fff", left: 0, top: 0, height: "100vh" }}
        collapsedWidth="0"
        theme="light"
      >
        <TopicMenu />
      </Sider>
        
      <Content>
        <Switch>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
            path="/"
            exact
          >
            <Hboi />
          </CustomRoute>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
            path='/vaardigheden'
          >
            <Vaardigheden />
          </CustomRoute>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
            path='/beheersingsniveaus'
          >
            <Beheersingsniveaus />
          </CustomRoute>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
            path='/professionalskills'
          >
            <ProfessionalSkills />
          </CustomRoute>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
            path='/hboi/:architectuurlaag/:activiteit'
          >
            <RedirectHboi />
          </CustomRoute>
          <CustomRoute 
            showBackIcon={breakpoint}
            collapsed={breakpoint}
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
