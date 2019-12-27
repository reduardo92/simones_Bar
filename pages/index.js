import Layout from '../components/layout';
import About from '../components/home/about';
import ImgBanner from '../components/ui/imgBanner';
import LiveMusic from '../components/home/liveMusic';
import HomeMenu from '../components/home/homeMenu';
import DailySpecials from '../components/home/dailySpecials';
import UpcomingEvents from '../components/home/upcomingEvents';
import MapBox from '../components/ui/mapBox';
import Contact from '../components/contact';
import Carousell from '../components/ui/carousel/carousel';

const IndexPage = () => (
  <Layout heroSize={true} banner='home'>
    <About />
    <ImgBanner
      title='PRIVATE EVENTS'
      subtile='Planning a party? Let us do the work'
      btnTitle='view more'
      toLink='/privateEvents'
    />
    <LiveMusic />
    <HomeMenu />
    <DailySpecials />
    <ImgBanner
      img='/FrontBar.jpg'
      posiion='35%'
      title='PHOTO GALLERY'
      subtile='cheack out our vibe'
      btnTitle='view more'
      toLink='/photoGallery'
    />
    <UpcomingEvents />
    <MapBox />
    <Contact />
    <Carousell />
  </Layout>
);

export default IndexPage;
