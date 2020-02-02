import StateProvider from '../components/context/StateProider';
import Head from 'next/head';
import '../global.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Simone's Bar</title>
      <link rel='stylesheet' type='text/css' href='../global.css' />
      <link
        href='https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Reenie+Beanie&display=swap'
        rel='stylesheet'
      />
    </Head>
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  </>
);

export default MyApp;
