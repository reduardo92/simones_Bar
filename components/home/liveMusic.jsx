import Fade from 'react-reveal/Fade';
import GridTwo from '../ui/gridTwo';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Icon from '../ui/icon';

const StyledEvent = styled.div`
  .event--text {
    margin: 1em;
  }

  .event--contacts {
    display: grid;
    gap: 0.5em;
    grid-gap: 0.5em;

    margin-bottom: 2.5em;
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--second-clr);
    svg {
      margin-right: 0.5em;
      color: var(--primary-clr);
      font-size: 1.7rem;
    }
  }

  .title--banner {
    align-items: center;
  }

  @media screen and (min-width: 760px) {
    text-align: right;

    .event--contacts {
      justify-items: flex-end;
    }

    .title--banner {
      align-items: flex-end;
    }
  }
`;
const Img = styled.img`
  max-width: 600px;
  margin: 0 auto;
  filter: drop-shadow(2px 5px 3px black);
`;

const LiveMusic = () => (
  <GridTwo className='section'>
    <Fade bottom>
      <Img src='/livemusic.svg' alt='live music img' />
      <StyledEvent className='event--content'>
        <TitleBanner
          topTitle='live music'
          title='Music & Event Inquiries'
          botTitle='get your jam on'
        />
        <p className='event--text'>
          Simone’s plays host to Chicago’s wide-ranging DJ and Music
          entertainment. The Lab is also available for private events. For more
          information:
        </p>
        <div className='event--contacts'>
          <Icon>
            <MdEmail /> musicbookings@simonesbar.com
          </Icon>
          <Icon>
            <MdEmail /> eventbookings@simonesbar.com
          </Icon>
          <Icon href='tel:+312668601'>
            <MdLocalPhone /> (312) 666-8601
          </Icon>
        </div>
        <Fade top delay={400}>
          <Button toLink='/contact' title='contact us' hoverclr />
        </Fade>
      </StyledEvent>
    </Fade>
  </GridTwo>
);

export default LiveMusic;
