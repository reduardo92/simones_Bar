import styled from 'styled-components';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Styled = styled.div`
  position: relative;
  padding: 0 2em;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  justify-items: center;
  gap: 0.2em;
  max-width: 650px;
  margin: 0 auto;

  .left--qoute,
  .right--qoute {
    color: black;
    font-size: 1.8rem;
    justify-self: center;
  }

  .review--name {
    grid-area: 2 / 1 / 2 / 6;
    color: var(--accent-clr);
    font-family: var(--fn-reenie);
    font-size: 2.4rem;
    -webkit-text-stroke: 0.1px var(--accent-clr);
  }
`;

const Qoute = () => {
  return (
    <Styled className='qoute'>
      <FaQuoteLeft className='left--qoute' />
      <p className='review'>
        Came here on a friday night for the first time. I had such a good time.
        The drinks are great staff was very attentive. I especially loved the
        vegan burger i had. Very nice atmosphere. Definatly recommend this bar
        and will be back soon!!!
      </p>
      <FaQuoteRight className='right--qoute' />
      <h3 className='review--name'>Linda Colon Corona</h3>
    </Styled>
  );
};

export default Qoute;
