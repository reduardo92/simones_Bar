import styled from 'styled-components';

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  .top {
    color: var(--second-clr);
    -webkit-text-stroke: 0.5px var(--second-clr);
    /* font-weight: bold; */
  }
  .title {
    color: var(--primary-clr);
    font-weight: var(--fw-bold);
    font-size: 2.2rem;
    -webkit-text-stroke: 2px var(--primary-clr);
  }
  .bottom {
    color: var(--accent-clr);
    font-family: var(--fn-reenie);
    -webkit-text-stroke: 0.1px var(--accent-clr);
    font-size: 1.5rem;
  }
`;

const TitleBanner = ({ topTitle, title, botTitle }) => {
  return (
    <Styled className='title--banner'>
      <h3 className='top'>{topTitle}</h3>
      <h2 className='title'>{title}</h2>
      <h3 className='bottom'>{botTitle}</h3>
    </Styled>
  );
};

export default TitleBanner;
