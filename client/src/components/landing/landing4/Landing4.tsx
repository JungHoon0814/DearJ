import React from 'react';
import * as SC from './Landing4SC';
import naverlogo from '../../../img/Naver_logo.png';
import lglogo from '../../../img/Lg_logo.png';
import coupanglogo from '../../../img/Coupang_logo.png';
import hanwhalogo from '../../../img/Hanwha_logo.png';
import sinhanlogo from '../../../img/Sinhan_logo.png';
import samsunglogo from '../../../img/Samsung_logo.png';
import gslogo from '../../../img/Gs_logo.png';
import poscologo from '../../../img/Posco_logo.png';

const Landing4 = () => {
  return (
    <SC.Landing4div>
      <SC.LogoContent1>
        <img src={naverlogo} alt="naver_logo" />
        <img className="coupang" src={coupanglogo} alt="coupang_logo" />
        <img className="sinhan" src={sinhanlogo} alt="sinhan_logo" />
        <img className="gs" src={gslogo} alt="gs_logo" />
      </SC.LogoContent1>
      <SC.LogoContent2>
        <img src={lglogo} alt="lg_logo" />
        <img className="hanwha" src={hanwhalogo} alt="hanwha_logo" />
        <img className="samsung" src={samsunglogo} alt="samsung_logo" />
        <img src={poscologo} alt="posco_logo" />
      </SC.LogoContent2>
      <SC.ContentText>
        대기업/ 중견기업 데이터를 위주로 하여 유효성 높은 합격자소서를 만들 수
        있습니다.
      </SC.ContentText>
    </SC.Landing4div>
  );
};

export default Landing4;
