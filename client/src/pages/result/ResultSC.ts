import styled from 'styled-components';

export const Boxdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Resultdiv = styled.div`
  // width: 100%;

  margin: 2% 0 0 4%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 60px;
  color: #808080;
`;

export const ResultTextdiv = styled.div`
  width: 100%;

  margin-top: 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  line-height: 80px;
  text-align: center;
  color: #808080;
`;

export const ResultNumdiv = styled.div`
  margin-top: 4%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 100px;
  line-height: 120px;
  color: #67bf8c;

  display: felx;
  justify-content: center;
  align-items: center;
`;

export const FeedbackButton = styled.button`
  width: 30%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 7% 0 0 35%;

  background: #67bf8c;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 150%;
  text-align: center;
  color: #ffffff;

  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
