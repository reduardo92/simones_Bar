import styled from 'styled-components';

const Styled = styled.section`
  /* margin: 5em 0; */

  .map--Box {
    width: 100vw;
    height: 400px;

    display: block;
  }

  @media screen and (min-width: 1024px) {
    .map--Box {
      height: 500px;
    }
  }
`;

const MapBox = () => (
  <Styled className='google--map'>
    <iframe
      className='map--Box'
      id='gmap_canvas'
      src='https://maps.google.com/maps?q=%20960%20W%2018th%20St%2C%20Chicago%2C%20IL%2060608&t=&z=15&ie=UTF8&iwloc=&output=embed'
      frameBorder='0'
    ></iframe>
  </Styled>
);

export default MapBox;
