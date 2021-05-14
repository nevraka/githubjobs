import '../styles/globals.css';
import AppHeader from '../src/components/AppHeader';
import { Layout } from 'antd';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <AppHeader onSearch={null} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
