import styled from 'styled-components';
import TitleBanner from '../ui/titleBanner';
import Button from '../ui/button';

const Styled = styled.section`
  display: grid;
  gap: 2em;
  justify-content: center;

  .beer--fries,
  .chip--burger {
    display: none;
    width: 250px;
  }

  /* Banner  */
  .daily--banner--container {
    position: relative;
    display: grid;
    gap: 2em;
    justify-items: center;
  }

  .burger--img {
    height: 280px;
    object-fit: cover;
    box-shadow: var(--shadow);
    max-width: 500px;
  }

  .banner {
    position: relative;
    display: grid;
    background-color: var(--white-clr);
    gap: 0.8em;
    border: 0.7em solid var(--second-clr);
    color: var(--primary-clr);
    font-weight: var(--fw-bold);
    box-shadow: var(--shadow);
    padding: 2em;
    max-width: 500px;
    margin: 0 auto;

    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 2px;
      bottom: 0;
      height: 103%;
      width: 104%;
      box-shadow: var(--shadow);
      background-color: var(--primary-clr);
      z-index: -1;
    }

    &--ul {
      display: grid;
      gap: 1em;
      margin: 1em 0;
    }
  }

  .side--text,
  .close--caption {
    color: var(--second-clr);
    font-weight: var(--fw-regular);
  }

  .close--caption + .close--caption {
    margin-bottom: 1em;
  }

  .side--text {
    margin-left: 0.5em;
  }

  .button {
    justify-self: center;
    display: ${props => props.showButton};
  }

  @media screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    .title--banner {
      align-items: flex-start;
      justify-self: flex-start;
      align-self: center;
    }

    .chip--burger {
      justify-self: flex-end;
      align-self: center;
      display: block;
    }

    .daily--banner--container {
      grid-column: 1 / 3;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
    }

    .burger--img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .banner {
      margin: 0;
      grid-column: 1 / 3;
      margin-top: 3em;
      margin-left: 10em;
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 1400px;
    margin: 6em auto;

    .chip--burger {
      justify-self: center;
      width: 300px;
    }

    .daily--banner--container {
      grid-column: 1 / 3;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
    }

    .burger--img {
      height: 404px;
      max-width: 720px;
    }

    .banner {
      margin-left: 17em;
      max-width: 580px;
    }

    .beer--fries {
      display: block;
      width: 300px;
      margin-top: -15em;
    }
  }
`;

const DailySpecials = ({ showButton }) => {
  return (
    <Styled className='daily--specials section' showButton={showButton}>
      <TitleBanner
        topTitle='save up'
        title='daily specials'
        botTitle='enjoy yourself'
      />
      <img src='/ncaho_burger.svg' alt='chip burger' className='chip--burger' />
      <div className='daily--banner--container'>
        <img src='/duckburger.jpg' alt='burger image' className='burger--img' />
        <div className='banner'>
          <h2 className='banner--title'>GET SAVING</h2>
          <ul className='banner--ul'>
            <li className='banner--link'>
              Sunday:
              <span className='side--text'>dollar off drafts until 8pm</span>
            </li>
            <li className='banner--link'>
              Monday:
              <span className='side--text'>PBR tallboy and any pizza $7</span>
            </li>
            <li className='banner--link'>
              Tuesday:
              <span className='side--text'>
                dollar off craft cans + bottles; $2 off nachos
              </span>
            </li>
            <li className='banner--link'>
              Wednesday:
              <span className='side--text'>
                PBR tallboy+Evan Williams shot $5; $2 off wings
              </span>
            </li>
            <li className='banner--link'>
              Thursday:
              <span className='side--text'>
                $4 well drinks (single pour only), $2 off quesadillas
              </span>
            </li>
            <li className='banner--link'>
              Every Day Until 5pm:
              <span className='side--text'>
                1/2 lb angus or vegan burger, hand cut fries and a PBR tallboy
                $8
              </span>
            </li>
          </ul>
          <p className='close--caption'>
            18% gratuity will be added to parties of 6 or more
          </p>
          <p className='close--caption'>
            No more than two forms of payment per check/table extra side of
            sauce 50 cents carryout charge 75 cents
          </p>
          <Button toLink='/menu' title='view more' />
        </div>
      </div>
      <img src='/beer_fries.png' alt='beer fries' className='beer--fries' />
    </Styled>
  );
};

export default DailySpecials;
