import styled from 'styled-components';
import Socials from './ui/socials';

const Styled = styled.footer`
  text-align: center;
  background-color: var(--primary-clr);

  p {
    color: var(--white-clr);
  }

  .content {
    display: grid;
    gap: 1em;
    grid-gap: 1em;

    padding: 2em 0;
    max-width: 1400px;
    margin: 0 auto;
  }

  .addresse {
    display: grid;
    gap: 0.5em;
    grid-gap: 0.5em;

    justify-content: center;
  }

  .logo {
    width: 280px;
    margin-bottom: 1em;
  }

  .hours {
    display: grid;
    gap: 0.3em;
    grid-gap: 0.3em;

    justify-content: center;
  }

  .social {
    margin: 0 auto;
  }

  .copyRight {
    background-color: var(--second-clr);
    padding: 0.5em 0;
  }

  @media screen and (min-width: 1024px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
      padding: 3em 0;
    }

    .social {
      order: -1;
      width: 250px;

      .social--link {
        font-size: 1.7rem;
      }
    }
  }
`;

const Footer = () => (
  <Styled className='footer'>
    <div className='content'>
      <div className='addresse'>
        <img className='logo' src='/logo.png' alt='logo' />
        <p className='info'>960 W 18th, Chicago, IL 60608</p>
        <p className='info'>(312) 666-8601</p>
      </div>
      <div className='hours'>
        <p>Mon-Fri: 11:30am-2am</p>
        <p>Sat: 11:30am-3am</p>
        <p> Sun: 11:30am-2am</p>
      </div>
      <Socials />
    </div>
    <div className='copyRight'>
      <p>© Simones Bar 2019</p>
    </div>
  </Styled>
);

export default Footer;
