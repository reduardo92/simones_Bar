import Navbar from './navbar';
import Footer from './footer';
import Hero from '../components/ui/hero';
import Banner from './ui/banner';

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
