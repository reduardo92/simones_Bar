import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import Carousell from '../components/ui/carousel/carousel';
import GridTwo from '../components/ui/gridTwo';
import HoursBox from '../components/ui/hoursBox';
import Qoute from '../components/ui/qoute';
import Contact from '../components/contact';

const contact = () => (
  <Layout
    banner='contact'
    heroImg='/outisde.jpg '
    titleImg='/contactTitle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <MapBox />
    <Contact />
    <ImgBanner
      img='/bar_inside_back.jpg'
      posiion='35%'
      title='MENU'
      subtile='SEE WHAT WE OFFER'
      btnTitle='view more'
      toLink='/menu'
    />
    <GridTwo className='mr-a max-width'>
      <HoursBox order />
      <Qoute />
    </GridTwo>
    <Carousell />
  </Layout>
);

export default contact;
