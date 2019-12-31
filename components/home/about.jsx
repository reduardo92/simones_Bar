import styled from 'styled-components';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';
import HoursBox from '../ui/hoursBox';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  padding: 0 5vw;
  text-align: center;
  display: grid;
  gap: 4em;
  justify-items: center;

  .about--content--text {
    margin: 1em 0 2em;
  }

  .green--img {
    max-width: 16rem;
  }
  .title--banner {
    align-items: center;
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;

    .about--content {
      grid-column: 1 / 3;

      &--text {
        max-width: 600px;
        margin: 1em auto 2em;
      }
    }
    .green--img {
      align-self: center;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;

    .about--content {
      grid-column: 1 / 1;
      text-align: left;
      display: grid;

      &--text {
        max-width: 320px;
      }
    }

    .button {
      align-self: end;
      justify-self: flex-start;
    }

    .title--banner {
      align-items: flex-start;
    }
  }
`;

const About = () => {
  return (
    <Styled className='section'>
      <Fade left>
        <div className='about--content'>
          <TitleBanner
            topTitle='ABOUT US'
            title='welcome'
            botTitle='Good Vibe for Good Day'
          />
          <p className='about--content--text'>
            Simone's is a unique bar and grill located in the Pilsen
            neighborhood of Chicago, Illinois. It's a great place to grab a
            craft beer, cocktail and quality grub. We are also proud to feature
            local and national music talent, gallery and private events.
          </p>
          <Fade top delay={300}>
            <Button title='view more' toLink='/about' hoverclr />
          </Fade>
        </div>
      </Fade>
      <Fade bottom>
        <img
          className='green--img'
          src='/gra_3s.png'
          alt='green restaurant img'
        />
      </Fade>
      <Fade right>
        <HoursBox />
      </Fade>
    </Styled>
  );
};

export default About;
