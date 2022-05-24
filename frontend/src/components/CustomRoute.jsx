import { Layout } from "antd";
import { Route } from "react-router-dom";
import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";
import { TopicMenu } from "./TopicMenu";

export default function CustomRoute ({ 
    pageTitle = "", 
    showBackIcon = false,
    path, 
    exact = false, 
    children,
    selectedKey,
    setSelectedKey 
}) {
    return <Route
        path={path}
        exact={exact}
    >
        <Layout>
            <Navbar 
                showBackIcon={showBackIcon} 
                pageTitle={pageTitle} 
                menu={TopicMenu}
                selectedKey={selectedKey} 
                setSelectedKey={setSelectedKey} 
            />
            <PageContainer > 
                {children}
            </PageContainer>
        </Layout>
    </Route>
}
