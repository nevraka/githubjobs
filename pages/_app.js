import '../styles/globals.css';
import AppHeader from '../src/components/AppHeader';
import AppFooter from '../src/components/AppFooter';
import { Layout } from 'antd';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppHeader onSearch={null} />
      <Component {...pageProps} />
      <AppFooter />
    </Layout>
  );
}

export default MyApp;
