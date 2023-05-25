import React from 'react';
import * as SC from './SignUpSC';
import SignupForm from './SignUpForm';

const SignUp = () => {
  return (
    <SC.Container>
      <SC.MainTitle>이메일로 회원가입</SC.MainTitle>
      <SC.UnderLine />
      <SC.InfoBox>
        <SignupForm />
        <SC.TextButton to="/signin"> {'>'}로그인하러 가기</SC.TextButton>
      </SC.InfoBox>
    </SC.Container>
  );
};

export default SignUp;
