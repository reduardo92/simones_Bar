import styled from 'styled-components';

const GridTwo = styled.section`
  display: grid;
  text-align: center;
  gap: 5em;
  grid-gap: 5em;

  justify-items: center;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export default GridTwo;
