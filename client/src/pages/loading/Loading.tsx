import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import * as SC from './LoadingSC';

const Loading = () => {
  return (
    <SC.LoadingDiv>
      <HashLoader color="#36d7b7" size={200} />
      <div className="comment">자소서를 비교하고 있어요.</div>
      <div className="subComment">잠시만 기다려주세요.</div>
    </SC.LoadingDiv>
  );
};

export default Loading;
