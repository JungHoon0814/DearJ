import React from 'react';
import API from '../../API';
import { useRecoilState, useRecoilValue } from 'recoil';
import { emailState, passwordState, loginSelector } from '../../store/store';
import * as SC from './SigninSC';
import Button from '../../components/common/Button';

function SignIn() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const loginInfo = useRecoilValue(loginSelector);

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // console.log(API);
      const res = await API.post(`/auth/signin`, loginInfo);
      localStorage.setItem('email', email);

      API.get('/auth/cookies').then(res => {
        const userToken = res.data;
        localStorage.setItem('userToken', userToken);
      });

      console.log(res);
      window.location.href = '/';
    } catch {
      alert('이메일, 비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <SC.Container>
      <SC.MainTitle>로그인</SC.MainTitle>
      <SC.UnderLine />
      <SC.LoginBox>
        <SC.LoginForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">이메일</label>
            <div className="form-field">
              <input
                required
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="EMAIL"
                onChange={onEmailHandler}
              />
            </div>
          </div>
          <div>
            <label>패스워드</label>
            <div className="form-field">
              <input
                required
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="PASSWORD"
                onChange={onPasswordHandler}
              />
            </div>
          </div>
          <Button type="submit">로그인</Button>
        </SC.LoginForm>
        <SC.TextButton to="/signup"> {'>'}회원가입하러 가기</SC.TextButton>
      </SC.LoginBox>
    </SC.Container>
  );
}

export default SignIn;
