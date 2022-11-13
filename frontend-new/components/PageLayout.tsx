import {useTranslations} from 'next-intl';
import Head from 'next/head';
import { Layout, Menu, Drawer, Button } from 'antd';
import {ReactNode, useState} from 'react';

const { Header, Content, Footer, Sider } = Layout;

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({children, title}: Props) {
  const t = useTranslations('PageLayout');
  const [open, setOpen] = useState(false);

  return (
    <>
        <Head>
            <title>{[title, t('pageTitle')].join(' - ')}</title>
        </Head>
        <Layout>
            

            <Layout >
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {children}
                    </div>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>{t('footerTitle')}</Footer> */}
            </Layout>
        </Layout>
    </>
  );
}
