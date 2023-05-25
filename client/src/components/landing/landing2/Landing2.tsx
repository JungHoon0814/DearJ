import React from 'react';
import * as SC from './Landing2SC';

const Landing2 = () => {
  return (
    <SC.LandingDiv2>
      {/* ---------- 서비스 소개 문구 ---------- */}
      <SC.TitleText>
        취업/이직의 첫 걸음 자소서!
        <br />
        <br />
        <br />
        합격하는 자소서의 패턴과 내 자소서를 비교하여 합격률을 높여보세요.
      </SC.TitleText>
      {/* ---------- 서비스 설명에 관한 전체 div박스 ---------- */}
      <SC.InstructionsForUse>
        {/* ---------- 서비스 타이틀 설명 ---------- */}
        <SC.Title1>Dear J 이용하는 방법</SC.Title1>
        <SC.StepDiv>
          <div className="circle1">
            <div className="text1">
              STEP 01 <br />
              <br />
              <br />
              <br /> 자기소개서 입력하기
            </div>
          </div>
          <div className="circle2">
            <p className="text2">
              STEP 02
              <br />
              합격 자소서와
              <br />내 자소서 비교하기
            </p>
          </div>
          <div className="circle3">
            <p className="text3">
              STEP 03
              <br />
              전문가에게
              <br /> 첨삭받기
            </p>
          </div>
          <div className="circle4">
            <p className="text4">
              STPE 04
              <br />
              유사도와 첨삭을 바탕으로
              <br />
              자소서 완성하기
            </p>
          </div>
        </SC.StepDiv>
      </SC.InstructionsForUse>
    </SC.LandingDiv2>
  );
};

export default Landing2;
