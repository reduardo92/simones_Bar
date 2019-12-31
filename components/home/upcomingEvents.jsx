import styled from 'styled-components';
import TitleBanner from '../ui/titleBanner';
import Qoute from '../ui/qoute';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  text-align: center;
  display: grid;
  gap: 2em;
  justify-content: center;

  .img--top,
  .img--bottom {
    display: none;
    width: 600px;
    object-fit: cover;
    height: 320px;
  }

  .event--calender {
    max-width: 500px;
    filter: drop-shadow(1px 2px 2px black);
  }

  @media screen and (min-width: 1024px) {
    .img--top,
    .img--bottom {
      display: block;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 1000px;
      justify-content: center;
      margin: 3.5em auto;
    }

    .event--calender {
      grid-column: 1 / 3;
      justify-self: center;
      margin-top: -23em;
    }

    .img--bottom {
      grid-column: 2 /3;
      justify-self: right;
      margin-top: -23em;
      z-index: -1;
    }
  }
`;

const UpcomingEvents = () => (
  <Fade>
    <Styled className='upcoming--events section'>
      <Fade bottom>
        <TitleBanner
          topTitle='GET INVOLVED'
          title='UPCOMING EVENTS'
          botTitle='COME LIVE UP THE FUN'
        />
      </Fade>
      <div className='container'>
        <img src='/dancing.jpg' alt='bar crowd' className='img--top' />
        <img
          src='/event.png'
          alt='event calender'
          className='event--calender'
        />
        <img src='/bar_crowd.jpg' alt='bar crowd' className='img--bottom' />
      </div>

      <Qoute />
    </Styled>
  </Fade>
);

export default UpcomingEvents;
