import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ImgBox from '../ui/imgBox';

const Styled = styled.section`
  max-width: 1400px;
  margin: 3em 1em 5em;
  text-align: center;
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 1300px) {
    margin: 3em auto 5em;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    .img-box {
      height: 320px;
    }
  }
`;

const Gallery = () => {
  const imgs = {
    0: '/bar.jpg',
    1: '/bar_back_tables.jpg',
    2: '/bar_crowd.jpg',
    3: '/patio.jpg',
    4: '/craft_beer.jpg',
    5: '/bar_inside_back.jpg',
    6: '/inside_right.jpg',
    7: '/bar_inside_angle.jpg',
    8: '/drink_pink.jpg',
    9: '/drink.jpg',
    10: '/dancing.jpg',
    11: '/FrontBar.jpg',
    12: '/SimonesBarFaceS.jpg',
    13: '/Column.jpg',
    14: '/burger.jpg',
    15: '/duckburger.jpg',
    16: '/dj.jpg',
    17: '/outisde.jpg',
    18: '/RoofPanel.jpg',
    19: '/santi.jpg',
    20: '/PinballBooth.jpg',
    21: '/mangounchained.jpg',
    22: '/music.jpg',
    23: '/weeding.jpg',
    24: '/pizza.jpg',
    25: '/maverick.jpg'
  };

  return (
    <Styled>
      {Object.values(imgs).map((img, i) => (
        <ImgBox key={i} className='img-box' img={img}>
          <a className='icon' href={img} target='_blank'>
            <FaSearch />
          </a>
        </ImgBox>
      ))}
    </Styled>
  );
};

export default Gallery;
