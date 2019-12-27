import styled from 'styled-components';

const ImgSlider = styled.div`
  background: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

export default ImgSlider;
