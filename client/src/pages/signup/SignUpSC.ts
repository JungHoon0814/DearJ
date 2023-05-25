import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 7% 0 5% 0;
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 4px groove red; */
`;

export const MainTitle = styled.div`
  width: 35%;
  font-weight: 600;
  font-size: 4vmin;
  display: flex;
  justify-content: center;
  margin: 0 0 3vh 0;
  /* border: 4px groove red; */
`;

export const UnderLine = styled.hr`
  width: 70%;
  height: 1px;
  background: rgba(223, 223, 223, 1);
  border: none;
  margin: 0 0 5vh 0;
`;

export const InfoBox = styled.div`
  width: 50%;
  height: 80vh;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  .error-msg {
    color: red;
    font-size: 14px;
    padding-top: 10px;
    /* border: 4px groove red; */
  }
  form {
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 2vh 0;
    div {
      width: 50%;
      .form-field {
        width: 100%;
        padding: 5px 0 0 0;
        input {
          width: 100%;
          height: 6vmin;
          background-color: inherit;
          border: 1px solid rgba(103, 103, 103, 1);
          border-radius: 5px;
        }
      }
    }
  }
`;

export const TextButton = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(120, 120, 120, 1);
`;
