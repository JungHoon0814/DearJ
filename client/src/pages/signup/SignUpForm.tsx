import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  emailState,
  passwordState,
  nickNameState,
  emailErrState,
  pwErrState,
  confirmPwErrState,
  userInfoSelector,
} from '../../store/store';
import StyledButton from '../../components/common/Button';
import API from '../../API';

const SignUpForm = () => {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [emailErr, setEmailErr] = useRecoilState(emailErrState);
  const [pwErr, setPwErr] = useRecoilState(pwErrState);
  const [confirmPwErr, setConfirmPwErr] = useRecoilState(confirmPwErrState);
  const userInfo = useRecoilValue(userInfoSelector);

  const emailValidationHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const email = e.target.value;
    const validateEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
      email,
    );
    validateEmail ? setEmailErr('') : setEmailErr('! 이메일 형식이 아닙니다');
    setEmail(e.target.value);
  };

  const pwValidationHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const pw = e.target.value;
    const validatPw = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$/.test(pw);
    validatPw ? setPwErr('') : setPwErr('! 영문, 숫자 포함 8자~16자');
    setPassword(e.target.value);
  };

  const confirmPwValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const confirmPw = e.target.value;
    confirmPw === password
      ? setConfirmPwErr('')
      : setConfirmPwErr('! 비밀번호가 일치하지 않습니다.');
  };

  const navigate = useNavigate();

  //유저 정보 post 요청
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
    API.post('/users/signup', userInfo)
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch(() => {
        alert('입력하신 정보를 다시 확인해주세요.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일</label>
        <div className="form-field">
          <input
            required
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={emailValidationHandler}
            placeholder="email@email.com"
          />
          {emailErr && <p className="error-msg">{emailErr}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <div className="form-field">
          <input
            required
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={pwValidationHandler}
          />
          {pwErr && <p className="error-msg">{pwErr}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="password">비밀번호 확인</label>
        <div className="form-field">
          <input
            required
            id="password"
            type="password"
            name="password"
            onChange={confirmPwValidation}
          />
          {confirmPwErr && <p className="error-msg">{confirmPwErr}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="name">닉네임</label>
        <div className="form-field">
          <input
            required
            id="name"
            type="text"
            name="name"
            value={nickName}
            onChange={e => setNickName(e.target.value)}
          />
        </div>
      </div>
      <StyledButton type="submit">회원가입</StyledButton>
    </form>
  );
};

export default SignUpForm;
