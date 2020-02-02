import { useContext } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import styled from 'styled-components';
import StateContext from '../../context/StateContext';

const Styled = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 5em;
  overflow-x: hidden;

  ul {
    display: flex;
    li {
      flex-shrink: 0;
      height: 300px;

      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media screen and (min-width: 760px) {
    height: 350px;

    ul {
      li {
        height: 350px;
      }
    }
  }
`;

const Carousell = () => {
  const { setCarosuel } = useContext(StateContext);

  const imgs = {
    0: '/burger.jpg',
    1: '/craft_beer.jpg',
    2: '/drink_pink.jpg',
    3: '/SimonesBarFaceS.jpg',
    4: '/PinballBooth.jpg',
    5: '/pizza.jpg',
    6: '/patio.jpg',
    7: '/santi.jpg',
    8: '/Outisde_night.jpg',
    9: '/patio_two.jpg',
    10: '/santigo_cocktail.jpg',
    11: '/burger_two.jpg'
  };

  return (
    <Styled className='carousel'>
      <Carousel
        slidesPerPage={setCarosuel()}
        infinite
        autoPlay={3000}
        animationSpeed={2000}
      >
        {Object.values(imgs).map((img, i) => (
          <img key={i} src={img} alt='img' />
        ))}
      </Carousel>
    </Styled>
  );
};

export default Carousell;
