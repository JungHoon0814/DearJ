import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as SC from './UserSC';
import API from '../../API';
import { useRecoilState } from 'recoil';
import { userNickNameState } from '../../store/store';
import Button from '../../components/common/Button';

function MyInfo() {
  const [storedEmail, setStoredEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userNickName, setUserNickName] = useRecoilState(userNickNameState);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email !== null) {
      setStoredEmail(email);
    }
    API.get('/auth/cookies').then(res => {
      const userToken = res.data;
      localStorage.setItem('userToken', userToken);
    });
  }, []);

  //내 정보 받아오기
  // useEffect(() => {
  //   const email = localStorage.getItem('email');
  //   if (email !== null) {
  //     setStoredEmail(email);
  //   }
  //   API.get('/auth/cookies').then(res => {
  //     const userToken = res.data;
  //     localStorage.setItem('userToken', userToken);
  //   });
  // }, []);

  const handlePwValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/signin', {
        email: storedEmail,
        password: pw,
      });
      localStorage.setItem('email', storedEmail);
      console.log(res);
      setIsSubmitted(true);
    } catch {
      alert('비밀번호를 다시 확인해주세요.');
    }
  };

  //Tab
  const [currentTab, setCurrentTab] = useState('myinfo');

  const selectTabHandler = (e: React.MouseEvent<HTMLLIElement>) =>
    setCurrentTab(e.currentTarget.id);

  //회원정보 수정
  const [emailErr, setEmailErr] = useState('');
  // const [pwErr, setPwErr] = useState('');
  // const [confirmPwErr, setConfirmPwErr] = useState('');
  const [userInfo, setUserInfo] = useState({
    email: localStorage.getItem('email'),
    nickname: userNickName,
  });
  const { nickname } = userInfo;

  const emailValidationHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const email = e.target.value;
    const validateEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(
      email,
    );
    validateEmail ? setEmailErr('') : setEmailErr('! 이메일 형식이 아닙니다');
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  // const pwValidationHandler = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ): void => {
  //   const pw = e.target.value;
  //   const validatPw = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,16}$/.test(pw);
  //   validatPw ? setPwErr('') : setPwErr('! 영문, 숫자 포함 8자~16자');
  //   setUserInfo({ ...userInfo, password: e.target.value });
  // };

  // const confirmPwValidation = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  // ): void => {
  //   const confirmPw = e.target.value;
  //   confirmPw === password
  //     ? setConfirmPwErr('')
  //     : setConfirmPwErr('! 비밀번호가 일치하지 않습니다.');
  // };

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, nickname: e.target.value });
  };

  const handleUserInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userId = localStorage.getItem('userId');
    API.put(`/users/${userId}`, { nickname })
      .then(() => {
        alert('닉네임이 변경되었습니다.');
        setUserNickName(nickname);
      })
      .catch(() => {
        console.log('닉네임 변경 실패');
      });
  };

  //회원탈퇴
  const handleDeleteAccount = () => {
    const userId = localStorage.getItem('userId');
    API.delete(`/users/${userId}`)
      .then(() => {
        alert('회원탈퇴가 완료되었습니다.');
        navigate('/');
      })
      .catch(() => {
        alert('문제가 발생했습니다. 다시 시도해주세요');
      });
  };

  return (
    <SC.Wrap>
      <SC.TitleWrap>
        <SC.MainTitle>내 정보</SC.MainTitle>
      </SC.TitleWrap>
      {!isSubmitted ? (
        <SC.InfoBox>
          <form onSubmit={handleSubmit}>
            <div className="my-info-auth">
              <div className="user-email">
                <label htmlFor="email">이메일</label>
                <div>{localStorage.getItem('email')}</div>
              </div>
              <div className="user-pw">
                <label className="pw">패스워드</label>
                <div className="form-field">
                  <input
                    required
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePwValue}
                    placeholder="PASSWORD"
                  />
                </div>
              </div>
            </div>
            <Button type="submit">내 정보 보기</Button>
          </form>
        </SC.InfoBox>
      ) : (
        <SC.MenuTab>
          <ul className="tabs">
            <li
              id="myinfo"
              onClick={selectTabHandler}
              className={currentTab === 'myinfo' ? 'activated' : ''}
            >
              내 정보 수정
            </li>
            <li
              id="deleteaccount"
              onClick={selectTabHandler}
              className={currentTab === 'deleteaccount' ? 'activated' : ''}
            >
              회원탈퇴
            </li>
          </ul>
          <SC.TabBottomLine>
            <div
              className={currentTab === 'myinfo' ? 'myinfo' : 'none-left'}
              id="myinfo"
            />
            <div
              className={
                currentTab === 'deleteaccount' ? 'deleteaccount' : 'none-right'
              }
              id="deleteaccount"
            />
          </SC.TabBottomLine>
          <div className="info-form-wrap">
            {currentTab === 'myinfo' && (
              <form onSubmit={handleUserInfo}>
                <div>
                  <label htmlFor="email">이메일</label>
                  <div className="form-field">
                    <input
                      required
                      id="email"
                      type="email"
                      name="email"
                      defaultValue={localStorage.getItem('email') || ''}
                      onChange={emailValidationHandler}
                    />
                    {emailErr && <p className="error-msg">{emailErr}</p>}
                  </div>
                </div>
                {/* <div>
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
                </div> */}
                {/* <div>
                  <label htmlFor="password">비밀번호 확인</label>
                  <div className="form-field">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                      onChange={confirmPwValidation}
                    />
                    {confirmPwErr && (
                      <p className="error-msg">{confirmPwErr}</p>
                    )}
                  </div>
                </div> */}
                <div>
                  <label htmlFor="name">닉네임</label>
                  <div className="form-field">
                    <input
                      required
                      id="name"
                      type="text"
                      name="name"
                      defaultValue={nickname}
                      onChange={handleNickName}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  onClick={() => {
                    console.log(userInfo);
                  }}
                >
                  수정하기
                </Button>
              </form>
            )}
            {currentTab === 'deleteaccount' && (
              <div className="delete-account">
                <div>
                  정말로 회원탈퇴하시겠습니까?
                  <br />
                  <br />
                  탈퇴시 모든 회원정보는 삭제되며 복구할 수 없습니다.
                </div>
                <Button onClick={handleDeleteAccount}>회원탈퇴</Button>
              </div>
            )}
          </div>
        </SC.MenuTab>
      )}
    </SC.Wrap>
  );
}

export default MyInfo;
