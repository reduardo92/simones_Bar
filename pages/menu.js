import Layout from '../components/layout';
import ImgBanner from '../components/ui/imgBanner';
import MapBox from '../components/ui/mapBox';
import Carousell from '../components/ui/carousel/carousel';
import GridTwo from '../components/ui/gridTwo';
import HoursBox from '../components/ui/hoursBox';
import Qoute from '../components/ui/qoute';
import MenuContent from '../components/menu/menuContent';
import DailySpecials from '../components/home/dailySpecials';

const menu = () => (
  <Layout
    banner='menu'
    heroImg='/outisde.jpg'
    titleImg='/menutitle.svg'
    heroOpacity='rgba(0, 0, 0, 0.85)'
  >
    <MenuContent />
    <ImgBanner
      img='/PinballBooth.jpg'
      title='ABOUT'
      subtile='SEE WHO WE ARE'
      btnTitle='view more'
      toLink='/about'
    />
    <DailySpecials showButton='none' />
    <ImgBanner
      img='/outisde.jpg'
      title='CONTACT'
      subtile='SHOOT US A QUESTION'
      btnTitle='view more'
      toLink='/contact'
    />
    <GridTwo className='mr-a max-width'>
      <HoursBox order />
      <Qoute />
    </GridTwo>
    <Carousell />
    <MapBox />
  </Layout>
);

export default menu;
