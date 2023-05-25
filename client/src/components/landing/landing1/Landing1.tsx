import React from 'react';
import maincomputer from '../../../img/Mainimg.png';
import { Path } from '../../../Router';
import * as SC from './Landing1SC';

const Landing1 = () => {
  return (
    <div>
      <SC.Landingbox>
        {/* ------- 원형 설정 ------- */}
        <SC.Circle1 />
        <SC.Circle2 />
        {/* ------- 텍스트 모음 ------- */}
        <SC.Textline>
          내 자소서, 합격 자소서와 얼마나 비슷할까?
          <br />
          <br />
          지원동기를 작성하고 합격한 자소서와 비교해 보세요.
        </SC.Textline>
        {/* ------- 컴퓨터 이미지 파일 ------- */}
        <SC.Maincomputer src={maincomputer} alt="컴퓨터 이미지" />
        {/* ------- 자기소개서페이지로 링크 보내기 ------- */}
        <SC.Resumebutton to={Path.RESUME}>
          <SC.Starttext>시 작 하 기</SC.Starttext>
        </SC.Resumebutton>
        {/* ------- 그래프바 구현 -------*/}
        <SC.Graphbarwarp>
          <div className="graph1">
            <p className="number">23%</p>
          </div>
          <div className="graph2">
            <p className="number">55%</p>
          </div>
          <div className="graph3">
            <p className="number">77%</p>
          </div>
        </SC.Graphbarwarp>
      </SC.Landingbox>
    </div>
  );
};

export default Landing1;
