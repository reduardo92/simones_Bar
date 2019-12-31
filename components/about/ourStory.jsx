import styled from 'styled-components';
import Button from '../ui/button';
import TitleBanner from '../ui/titleBanner';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  max-width: 1400px;
  margin: 3em auto 5em;
  text-align: center;
  display: grid;
  gap: 1em;

  .para {
    margin: 1em 1em;
  }

  .img-box {
    object-fit: cover;
  }

  .box {
    display: grid;
    gap: 3em;
  }

  .box-3 .text {
    display: grid;
    justify-items: center;
  }

  .button {
    margin-top: 1em;
  }

  @media screen and (min-width: 768px) {
    margin-left: 1em;
    margin-right: 1em;
    .box {
      grid-template-columns: repeat(2, 1fr);
      gap: 0;
    }
    .img-box {
      height: 100%;
      object-position: 45%;
    }

    .box-1,
    .box-3 {
      .img-box {
        order: -1;
      }
    }
  }

  @media screen and (min-width: 1300px) {
    margin: 5em auto;
    gap: 1.5em;

    .box {
      .text {
        text-align: left;
        max-width: 600px;
      }
      /* .img-box {
        height: 350px;
      } */
    }

    .title--banner {
      align-items: flex-start;
    }

    .box-1 {
      .text {
        justify-self: center;
      }
    }

    .box-2 {
      .img-box {
        margin-left: -3.5em;
      }
    }

    .box-2,
    .box-3 {
      .text {
        width: 600px;
      }
      .img-box {
        height: 380px;
      }
    }

    .box-3 .text {
      justify-self: center;
      align-items: baseline;
    }
  }
`;

const OurStory = () => (
  <Styled className='our-story'>
    <div className='box box-1'>
      <div className='text fadeIn'>
        <TitleBanner
          topTitle='visit us'
          title='our story'
          botTitle='see who wse are'
        />
        <p className='para'>
          For over ten years Simone’s has been located in the Pilsen
          neighborhood of Chicago offering a great bar and grill experience.
          It’s a fantastic environment for mixing with friends, colleagues and
          neighbors. We have something going on most nights whether it’s DJs,
          trivia, karaoke and live performances with DJs.
        </p>
        <p className='para'>
          The interior of Simone’s is undeniably unique with two distinct bar
          areas and seasonal outside space. Using various reclaimed
          architectural artifacts, the decor includes a bar-top built from a
          bowling alley lane, graffiti-scarred high school chemistry table tops
          and booths built from old pinball machines.
        </p>
      </div>
      <Fade left>
        <img className='img-box' src='/bar_inside_angle.jpg' alt='bar image' />
      </Fade>
    </div>
    <div className='box box-2'>
      <div className='text fadeIn'>
        <p className='para'>
          The use of reclaimed materials fits in with Simone’s commitment to
          responsible and green-friendly practices which also includes a rooftop
          herb garden and banks of solar panels.
        </p>
        <p className='para'>
          Simone’s offers a fantastic platform for performance and presentation,
          including two main rooms, each with its own premium sound and PA
          systems.
        </p>
        <p className='para'>
          Hovering over the end of the front room, beyond the bowling lane bar,
          is the main DJ booth, complete with a cage to hold all the groupies.
          Around the corner of the front room lies a columned seating area with
          booths woven of old seat belts.
        </p>
      </div>
      <Fade right>
        <img className='img-box' src='/inside_right.jpg' alt='bar image' />
      </Fade>
    </div>
    <div className='box box-3'>
      <div className='text fadeIn'>
        <p className='para'>
          Following the rear walls of the front room is a band of graffiti
          created by local street artists. Through the doors at the back of the
          front room is Simone’s Lab, another bar and performance area which
          focuses on art exhibition, salon-style discussions and performance and
          cultural events.
        </p>
        <p className='para'>
          Sound fun? We think it is! Come by and join us for food and libations
          in the Pilsen neighborhood of Chicago
        </p>
        <Fade top delay={400}>
          <Button toLink='/contact' title='contact us' />
        </Fade>
      </div>
      <Fade left>
        <img className='img-box' src='/bar_inside_back.jpg' alt='bar image' />
      </Fade>
    </div>
  </Styled>
);

export default OurStory;
