import styled from 'styled-components';

export const LoadingDiv = styled.div`
  height: 76vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .comment {
    margin-top: 4vh;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 50px;
    line-height: 60px;

    display: flex;
    align-items: center;
    text-align: center;
  }

  .subComment {
    margin-top: 4vh;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    color: #d9d9d9;

    display: flex;
    align-items: center;
    text-align: center;
  }
`;
