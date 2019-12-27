import styled from 'styled-components';
import Button from './button';

const Styled = styled.section`
  position: relative;
  background: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: ${props => props.posiion || 'center'};
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  width: 100%;
  height: 450px;
  text-align: center;
  z-index: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  .img--banner__img {
    background: url('/box.png');
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 105%;
    background-position: center;
    background-size: 100% 100%;
  }

  .subtitle {
    margin-bottom: 1em;
    letter-spacing: 1.1px;
  }

  @media screen and (min-width: 1024px) {
    height: 500px;

    .title {
      font-size: 2.4rem;
    }

    .subtitle {
      font-size: 1.4rem;
    }
  }
`;

const ImgBanner = ({
  img = '/outisde.jpg',
  posiion,
  title,
  subtile,
  btnTitle,
  toLink
}) => (
  <Styled className='img--banner section' img={img} posiion={posiion}>
    <div className='img--banner__img' />
    <h2 className='title'>{title}</h2>
    <h3 className='subtitle'>{subtile}</h3>
    <Button toLink={toLink} title={btnTitle} />
  </Styled>
);

export default ImgBanner;
