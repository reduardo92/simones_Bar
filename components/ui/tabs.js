import styled from 'styled-components';

const TabStyled = styled.button`
  color: ${props => (props.active ? 'var(--second-clr)' : 'var(--white-clr)')};
  background-color: ${props =>
    props.active ? 'transparent' : 'var(--second-clr)'};
  padding: 0.8em 1.3em;
  border-radius: 5px;
  text-transform: uppercase;
  border: none;
  font-weight: var(--fw-bold);
  transition: var(--ease--in--out--02s);
  border: 3px solid
    ${props => (props.active ? 'var(--second-clr)' : 'transparent')};
  outline-color: ${props =>
    props.active ? 'transparent' : 'var(--second-clr);'};
  transform: ${props => (props.active ? 'scale(0.95)' : '')};
  cursor: pointer;

  &:hover,
  &focus {
    color: ${props => (props.color ? 'var(--second-clr)' : 'var(--white-clr)')};
    transform: scale(0.95);
    background-color: transparent;
    border-color: var(--second-clr);
    outline-color: var(--second-clr);
    cursor: pointer;
  }
`;

export default TabStyled;

// const Tabs = ({title, onClick}) => {
//     return (
//         <TabStyled className='tab'>

//         </TabStyled>
//     )
// }

// export default Tabs
