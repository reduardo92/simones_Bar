import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import GridTwo from '../components/ui/gridTwo';
import HoursBox from '../components/ui/hoursBox';
import Qoute from '../components/ui/qoute';
import Gallery from '../components/photoGalley/gallery';

const photoGallery = () => (
  <Layout
    banner='photo gallery'
    heroImg='/outisde.jpg'
    titleImg='/galleryTittle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <Gallery />
    <ImgBanner
      img='/bar.jpg'
      title='MENU'
      subtile='SEE WHAT WE OFFER'
      btnTitle='view more'
      toLink='/menu'
    />
    <GridTwo className='mr-a max-width'>
      <HoursBox order />
      <Qoute />
    </GridTwo>
    <MapBox />
  </Layout>
);

export default photoGallery;
