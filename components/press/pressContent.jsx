import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ImgBox from '../ui/imgBox';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  max-width: 1400px;
  margin: 3em 1em 5em;
  text-align: center;
  display: grid;
  gap: 1em;

  .title {
    color: var(--primary-clr);
  }

  .para {
    margin: 0.5em auto;
    max-width: 900px;
  }

  .box {
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    margin: 3em auto 5em;

    .box {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
`;

const PressContent = () => {
  const imgs = {
    0: '/outisde.jpg',
    1: '/FrontBar.jpg',
    2: '/PinballBooth.jpg',
    3: '/Column.jpg',
    5: '/bar_back.jpg',
    6: '/RoofPanel.jpg'
  };

  return (
    <Fade>
      <Styled>
        <h2 className='title'>ALLWAYS WELCOME</h2>
        <p className='para'>
          Simone’s welcomes press and other inquiries for articles, video news
          reports, blog write-ups and other mentions in the media. Feel free to
          use our Web site as a way to get general information about us. To
          arrange an interview or get additional information, contact
          info@Simonesbar.com
        </p>
        <p className='para'>
          The following links point toward high-resolution JPG image files which
          may be used for media coverage about Simone’s. Please contact us
          regarding any usage questions.
        </p>
        <div className='box'>
          {Object.values(imgs).map((img, i) => (
            <ImgBox key={i} className='img-box' img={img}>
              <a className='icon' href={img} target='_blank'>
                <FaSearch />
              </a>
            </ImgBox>
          ))}
        </div>
      </Styled>
    </Fade>
  );
};

export default PressContent;
