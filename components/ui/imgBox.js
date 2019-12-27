import styled from 'styled-components';

const ImgBox = styled.div`
  position: relative;
  background: url(${props => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 220px;
  width: 100%;
  /* z-index: 0; */
  transition: var(--ease--in--out--02s);

  &::before {
    content: '';
    position: absolute;
    transition: var(--ease--in--out--02s);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    /* z-index: -1; */
  }

  .icon {
    transition: var(--ease--in--out--02s);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #5d5d5d;
    color: var(--white-clr);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.85;
    }
  }

  @media screen and (min-width: 1200px) {
    &::before {
      height: 0;
      background-color: rgba(0, 0, 0, 0);
    }

    .icon {
      transform: translate(-50%, -50%) scale(0);
    }

    &:hover::before {
      background-color: rgba(0, 0, 0, 0.7);
      height: 100%;
    }

    &:hover .icon {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export default ImgBox;
