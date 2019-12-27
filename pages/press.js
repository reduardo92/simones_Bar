import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import Carousell from '../components/ui/carousel/carousel';
import GridTwo from '../components/ui/gridTwo';
import HoursBox from '../components/ui/hoursBox';
import Qoute from '../components/ui/qoute';
import PressContent from '../components/press/pressContent';

const press = () => (
  <Layout
    banner='press'
    heroImg='/outisde.jpg '
    titleImg='/presstittle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <PressContent />
    <ImgBanner
      img='/FrontBar.jpg'
      title='PHOTO GALLERY'
      subtile='cheack out our vibe'
      btnTitle='view more'
      toLink='/photoGallery'
    />
    <GridTwo className='mr-a max-width'>
      <HoursBox />
      <Qoute />
    </GridTwo>
    {/* <MapBox /> */}
    <Carousell />
  </Layout>
);

export default press;
