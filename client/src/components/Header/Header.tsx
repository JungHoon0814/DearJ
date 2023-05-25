import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Path } from '../../Router';
import logo from '../../img/Logo.png';
import API from '../../API';
import * as SC from './HeaderSC';
import jwt_decode, { JwtPayload } from 'jwt-decode';

const Header = () => {
  // ---------- useState 선언 ----------
  const [isLogined, setIsLogined] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>();
  const [role, setRole] = useState<string>();
  const token = localStorage.getItem('userToken');

  // ---------- 토큰 확인시 처리될 함수 ----------
  useEffect(() => {
    async function loadCookieData() {
      if (token) {
        const decoded: JwtPayload = jwt_decode(token);
        const userId = decoded.sub;

        if (userId) localStorage.setItem('userId', userId);

        const userData = await API.get(`/users/${userId}`);
        setUserName(userData.data.data.nickname);
        setRole(userData.data.data.role);
        setIsLogined(true);
      }
    }
    loadCookieData();
  }, []);
  //로그아웃 함수
  const LogoutClickHandle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    localStorage.removeItem('userToken');
    window.location.href = '/';
  };
  return (
    <div>
      <SC.HeaderContainer>
        <SC.HeaderLogo to={Path.HOME}>
          <img src={logo} alt="mainlogo" />
        </SC.HeaderLogo>
        <SC.HeaderLinks>
          {isLogined ? (
            <>
              {role === 'admin' ? (
                <>
                  <Link to={Path.ADMIN}>관리자 페이지</Link>
                  <SC.LogoutButton onClick={LogoutClickHandle}>
                    로그아웃
                  </SC.LogoutButton>
                </>
              ) : (
                <>
                  <Link to={Path.USER}>{userName} 페이지</Link>
                  <SC.LogoutButton onClick={LogoutClickHandle}>
                    로그아웃
                  </SC.LogoutButton>
                </>
              )}
            </>
          ) : (
            <>
              <Link to={Path.SIGNIN}>로그인</Link>
              <Link to={Path.SIGNUP}>회원가입</Link>
            </>
          )}
        </SC.HeaderLinks>
      </SC.HeaderContainer>
    </div>
  );
};

export default Header;
