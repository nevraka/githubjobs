import '../styles/globals.css';
import AppHeader from '../src/components/AppHeader';
import AppFooter from '../src/components/AppFooter';
import { Layout } from 'antd';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppHeader />
      <div style={{ paddingBottom: '80px', width: '100%' }}>
        <Component {...pageProps} />
      </div>
      <AppFooter />
    </Layout>
  );
}

export default MyApp;
