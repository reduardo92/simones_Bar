import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

const Styled = styled.a`
  font-family: var(--fn-monterrat);
  font-weight: var(--fw-bold);
  font-size: 1em;
  text-align: center;
  background-color: ${props =>
    props.bgclr ? 'var(--second-clr)' : 'var(--primary-clr)'};
  color: var(--white-clr);
  text-transform: uppercase;
  padding: 0.6em 2.5em;
  border-radius: 5px;
  border: 5px solid transparent;
  position: relative;
  transition: var(--ease--in--out--02s);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(0.95);
    background-color: transparent;
    border-color: var(--primary-clr);
    color: ${props => props.hoverclr && 'var(--second-clr)'};
    cursor: pointer;
  }
`;

const Button = ({ toLink, title, hoverclr, bgclr }) => (
  <Link href={toLink}>
    <Styled hoverclr={hoverclr} bgclr={bgclr} className='button'>
      {title}
    </Styled>
  </Link>
);

export default Button;
