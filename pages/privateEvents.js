import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import Carousell from '../components/ui/carousel/carousel';
import GridTwo from '../components/ui/gridTwo';
import HoursBox from '../components/ui/hoursBox';
import Qoute from '../components/ui/qoute';
import PlannigParty from '../components/privateEvents/plannigParty';

const privateEvents = () => (
  <Layout
    banner='Private Events'
    heroImg='/outisde.jpg'
    titleImg='/eventsTiitle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <PlannigParty />
    <ImgBanner
      img='/bar_back_tables.jpg'
      title='PRESS'
      subtile='WELCOMES TO PRESS AND INQUIRIES'
      btnTitle='view more'
      toLink='/press'
    />
    <GridTwo className='mr-a max-width'>
      <HoursBox />
      <Qoute />
    </GridTwo>
    <Carousell />
    <MapBox />
  </Layout>
);

export default privateEvents;
