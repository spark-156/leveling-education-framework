import { Layout } from "antd";
import { Route } from "react-router-dom";
import { PageContainer } from "./PageContainer";
import { Navbar } from "./Navbar";

export default function CustomRoute ({ 
    pageTitle = "", 
    showBackIcon = false,
    path, 
    exact = false, 
    children,
}) {
    return <Route
        path={path}
        exact={exact}
    >
        <Layout>
            <Navbar 
                showBackIcon={showBackIcon} 
                pageTitle={pageTitle} 
            />
            <PageContainer > 
                {children}
            </PageContainer>
        </Layout>
    </Route>
}
