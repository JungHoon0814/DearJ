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

export const LoginBox = styled.div`
  width: 50%;
  height: 50vh;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  /* border: 4px groove red; */
`;

export const LoginForm = styled.form`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 4px groove blue; */
  div {
    width: 50%;
    /* border: 4px groove red; */
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
`;

export const Input = styled.input`
  width: 100%;
  background-color: inherit;
  /* border: 4px groove red; */
`;

export const TextButton = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(120, 120, 120, 1);
`;
