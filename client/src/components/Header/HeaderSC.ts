import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 헤더 컨테이너
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 20px;
  background-color: #ffffff;
  color: black;
  border-bottom: 2px solid rgba(128, 128, 128, 0.4);
`;

// 헤더의 로고
export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  height: 6vh;
  justify-content: center;
  font-size: 1em;
  & img {
    height: 100%;
  }
`;

// 헤더 링크 설정
export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  margin-right: 3%;

  & a {
    text-decoration: none;
    color: black;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #fff;
      color: #3c885c;
    }
  }
`;

export const LogoutButton = styled.button`
  border: none;
  background: none;

  font-size: 1em;

  height: 6vh;

  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #3c885c;
  }
`;
