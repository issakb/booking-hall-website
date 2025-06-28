import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
