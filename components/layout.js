import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';
import Hero from '../components/ui/hero';
import Banner from './ui/banner';
import '../global.css';

const Layout = ({
  children,
  heroSize,
  heroImg,
  titleImg,
  banner,
  heroOpacity
}) => {
  return (
    <>
      <Head>
        <title>Simone's Bar</title>
        <link href='../public/global.css' rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Reenie+Beanie&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <header>
        <Hero heroSize={heroSize} img={heroImg} heroOpacity={heroOpacity}>
          <Banner titleImg={titleImg} banner={banner} />
        </Hero>
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
