import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const ScrollArrowTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 30px;
  justify-content: flex-end;
  align-items: center;
  /* z-index: 1000; */
  width: 40px;
  height: 40px;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: ${fadeIn}) {
    width: 30px;
    height: 30px;
    right: 20px;
  }
`;
