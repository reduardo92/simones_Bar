import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Styled = styled.div`
  width: 300px;
  background-color: var(--primary-clr);
  color: var(--white-clr);
  font-weight: var(--fw-bold);
  box-shadow: var(--shadow);
  .box {
    padding: 2.5em 0em;
    outline: #fff 5px solid;
    outline-offset: -16px;
  }

  .box--title {
    margin-bottom: 0.5em;
  }
  .hour {
    color: inherit;
    margin-bottom: 0.2em;
  }

  @media only screen and (min-width: 768px) {
    order: ${props => props.order && 1};
  }
`;

const HoursBox = ({ order }) => (
  <Styled className='hours--box' order={order}>
    <Fade>
      <img src='/bar_inside_angle.jpg' alt='restaurant inside image' />
      <div className='box'>
        <h3 className='box--title'>HOURS</h3>
        <p className='hour'>Mon-Fri: 11:30am-2am</p>
        <p className='hour'>Sat: 11:30am-3am</p>
        <p className='hour'>Sun: 11:30am-2am</p>
      </div>
    </Fade>
  </Styled>
);

export default HoursBox;
