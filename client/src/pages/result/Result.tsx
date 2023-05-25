import React, { useEffect } from 'react';
import * as SC from './ResultSC';
import { Path } from '../../Router';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import API from '../../API';
import { useRecoilValue } from 'recoil';
import { SimilarState } from '../../store/store';
const Result = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>();
  const token = localStorage.getItem('userToken');
  const similarity = useRecoilValue(SimilarState);

  useEffect(() => {
    if (!similarity) return navigate('/', { replace: true });

    async function loadData() {
      if (token) {
        const userId = localStorage.getItem('userId');
        const userData = await API.get(`/users/${userId}`);
        setUserName(userData.data.data.nickname);
      }
    }
    loadData();
  }, []);

  const clickHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (token) {
      navigate(Path.EXPERTS);
    } else {
      alert('로그인 해주세요.');
      navigate(Path.SIGNIN);
    }
  };
  return (
    <>
      {similarity && (
        <SC.Boxdiv>
          <SC.Resultdiv>결과</SC.Resultdiv>
          <SC.ResultTextdiv>
            {userName ? (
              <>
                {userName}님의 자기소개서 <br />
              </>
            ) : (
              <>
                J님의 자기소개서
                <br />
              </>
            )}
            유사도는?
          </SC.ResultTextdiv>
          <SC.ResultNumdiv>{(similarity * 100).toFixed(2)}%</SC.ResultNumdiv>
          <SC.FeedbackButton onClick={clickHandler}>
            피드백 받기
          </SC.FeedbackButton>
        </SC.Boxdiv>
      )}
    </>
  );
};

export default Result;
