import React, { useState, useEffect } from 'react';
import * as SC from './AdminSC';
import API from '../../API';
import Button from '../../components/common/Button';

const AdminInfo = () => {
  // ---------- 로컬 스토리지에 저장된 사용자 이메일 ----------
  const [storedEmail, setStoredEmail] = useState('');
  // ---------- 사용자가 입력한 패스워드 ----------
  const [pw, setPw] = useState('');
  // ---------- 폼이 제출되 었는지 여부 ----------
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ---------- 로컬스토리지 안에 저장된 사용자 이메일을 사용하겠다는 코드 ----------
  // ---------- 토큰 형식으로 받아오게되면 토큰을 사용해야하는 것이 아닌지? ----------
  useEffect(() => {
    // ---------- 토큰을 받아오게되면 토큰을 사용하는 방식으로 코드 수정 예정 ----------
    const email = localStorage.getItem('email');
    if (email !== null) {
      setStoredEmail(email);
    }
  }, []);

  // ---------- 패스워드 입력 필드의 값을 변경하는 함수 ----------
  const handlePwValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  // ---------- 폼이 제출 되었을때 실행되는 함수 ----------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // ---------- 여기서 통신요청이 왔을때 토큰 확인후 롤을 주어야하는지? ----------
      const res = await API.post('/auth/signin', {
        email: storedEmail,
        password: pw,
      });
      localStorage.setItem('email', storedEmail);
      console.log(res);
      setIsSubmitted(true);
    } catch (err) {
      alert(err);
    }
  };

  // ---------- tab -----------
  const [currentTab, setCurrentTab] = useState('admininfo');

  // ---------- 탭 선택시 실행되는 함수 -----------
  const selectTabHandler = (e: React.MouseEvent<HTMLLIElement>) =>
    setCurrentTab(e.currentTarget.id);

  return (
    <SC.AdminGroup>
      <SC.AdminTitleGroup>
        <SC.AdminMainTitle>관리자 정보</SC.AdminMainTitle>
        <SC.AdminUnderLine />
      </SC.AdminTitleGroup>
      {!isSubmitted ? (
        <SC.AdminInfoBoxGroup>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">이메일</label>
              <div>{localStorage.getItem('email')}</div>
            </div>
            <div>
              <label className="pw">패스워드</label>
              <div className="adminform-field">
                <input
                  required
                  id="password"
                  type="password"
                  name="password"
                  onChange={handlePwValue}
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
            </div>
            <Button type="submit">내 정보 보기</Button>
          </form>
        </SC.AdminInfoBoxGroup>
      ) : (
        <SC.AdminMenuTab>
          <ul className="tabs">
            <li
              id="admininfo"
              onClick={selectTabHandler}
              className={currentTab === 'admininfo' ? 'activated' : ''}
            >
              관리자 정보 수정
            </li>
            <li
              id="admindeleteaccount"
              onClick={selectTabHandler}
              className={currentTab === 'admindeleteaccount' ? 'activated' : ''}
            >
              회원 탈퇴
            </li>
          </ul>
          <SC.AdminTabBottomLine>
            <div
              className={
                currentTab === 'admininfo' ? 'admininfo' : 'adminnone-left'
              }
              id="admininfo"
            />
            <div
              className={
                currentTab === 'admindeleteaccount'
                  ? 'admindeleteaccount'
                  : 'adminnone-right'
              }
              id="admindeleteaccount"
            />
          </SC.AdminTabBottomLine>
          <div>
            {currentTab === 'admininfo' && (
              <form>
                <div>
                  <label htmlFor="password">비밀번호</label>
                  <div className="adminform-field">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password">비밀번호 확인</label>
                  <div className="adminform-field">
                    <input
                      required
                      id="password"
                      type="password"
                      name="password"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="name">닉네임</label>
                  <div className="adminform-field">
                    <input required id="name" type="text" name="name" />
                  </div>
                </div>
                <Button>수정하기</Button>
              </form>
            )}
            {/* ---------- 회원탈퇴가 아닌 회원을 삭제하는 방식으로 구현을 해보려고 고민중 ---------- */}
            {currentTab === 'admindeleteaccount' && (
              <div>
                <div>정말 회원탈퇴 하시겠습니까?</div>
                <Button>회원탈퇴</Button>
              </div>
            )}
          </div>
        </SC.AdminMenuTab>
      )}
    </SC.AdminGroup>
  );
};

export default AdminInfo;
