import styled from 'styled-components';
import Button from './button';

const Styled = styled.div`
  padding: 0 0.5em;
  .subtitle {
    font-family: var(--fn-reenie);
    font-size: 1.5rem;
    margin-bottom: 1em;
  }
  .title-img {
    margin-top: 5em;
    margin-bottom: 1em;
  }

  @media screen and (min-width: 768px) {
    .title-img {
      max-width: 450px;
    }
  }
  @media screen and (min-width: 1024px) {
    .subtitle {
      font-size: 1.7rem;
    }

    .button {
      font-size: 1.15rem;
    }
  }
`;

const Banner = ({ titleImg, banner }) => {
  return (
    <Styled>
      {banner === 'home' ? (
        <>
          <img src='simones.svg' className='title-img' />
          <h2 className='subtitle'>Bar & Grill in the heart of Pilsen</h2>

          <Button title='visit us' toLink='/contact' />
        </>
      ) : (
        <img src={titleImg} className='title-img' />
      )}
    </Styled>
  );
};

export default Banner;
