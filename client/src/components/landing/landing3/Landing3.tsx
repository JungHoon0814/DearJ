import React from 'react';
import * as SC from './Landing3SC';

const Landing3 = () => {
  return (
    <SC.LandingDiv3>
      <div className="content_box1">
        <p className="contentdescription1">
          실제 합격자소서 데이터를 기반으로 딥러닝 학습된 인공지능이
          <br />
          사용자의 자기소개서와 합격자소서 간의 유사도를 측정하여 보여주고,
          <br />
          전문가의 첨삭 서비스를 받을 수 있습니다.
        </p>
      </div>
      <div className="content_box2">
        <p className="contentdescription2">
          실제 합격자소서 데이터를 기반으로 딥러닝 학습된 인공지능이
          <br />
          사용자의 자기소개서와 합격자소서 간의 유사도를 측정하여 보여주고,
          <br />
          전문가의 첨삭 서비스를 받을 수 있습니다.
        </p>
      </div>
    </SC.LandingDiv3>
  );
};

export default Landing3;
