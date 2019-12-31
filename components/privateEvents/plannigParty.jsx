import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Styled = styled.section`
  max-width: 1400px;
  margin: 3em auto 5em;
  text-align: center;
  display: grid;
  gap: 1em;

  .title {
    color: var(--primary-clr);
    margin: 0 0.1em 1em;
  }

  .para {
    margin: 0.8em 1em;
  }

  .img-box {
    object-fit: cover;
    max-width: 700px;
    margin: 0 auto;
    display: block;
  }

  .text {
    margin-top: 1em;
  }

  .box-2 
    .img-box {
      margin: 1em auto;
    }
  }

  .contract  {
    display: block;
      margin-top: 1.5em;
      color: var(--primary-clr);
      font-weight: var(--fw-bold);
      transition: var(--ease--in--out--02s);

      &:hover,&:focus {
        color: var(--second-clr);
      }
    }


  @media screen and (min-width: 1300px) {
.img-box {
  max-width: 800px;
}
  }
`;

const PlannigParty = () => (
  <Fade>
    <Styled className='our-story'>
      <h2 className='title'>Planning a party? Let us do the work.</h2>
      <div className='box box-1'>
        <img className='img-box' src='/bar.jpg' alt='bar image' />
        <div className='text'>
          <p className='para'>
            From graduations to birthday parties, we can do it all.
          </p>
          <p className='para'>
            Choose from our array of diverse party platters, be able to play
            your own music,
          </p>
          <p className='para'>
            and have the flexibility of either a cash bar or set tab limit.
          </p>
        </div>
      </div>
      <div className='box box-2'>
        <div className='text'>
          <img className='img-box' src='/bar_back_tables.jpg' alt='bar image' />
          <p className='para'>
            For inquires or questions regarding private events
          </p>
          <p className='para'>
            please contact our event manager at eventbookings@simonesbar.com.
          </p>
          <a
            className='contract'
            href='https://pdfhost.io/v/+mWKiBYj@_PrivateEventContractAug19pdf.pdf'
            target='_blank'
          >
            Private Event Contract & Food Platter Menu
          </a>
        </div>
      </div>
    </Styled>
  </Fade>
);

export default PlannigParty;
