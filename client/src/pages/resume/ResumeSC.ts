import styled, { keyframes } from 'styled-components';

// 버튼 전환 효과
const changeBackground = keyframes`
  0% {
    background-color: #f5f5f5;
    border-radius: 20px;
  }
  50% {
    background-color: #c8c8c8;
    border-radius: 20px;
  }
  100% {
    background-color: #f5f5f5;
    border-radius: 20px;
  }
`;
// 이미지 등장 효과 오른쪽 요소
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
// 이미지 등장효과 왼쪽요소
const fadeIn2 = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// 메인 컨테이너 박스
export const Mainbox = styled.div`
  background: linear-gradient(
    to right,
    #08863c,
    #259f5b,
    #42b97c,
    #5dce9d,
    #82ddb7,
    #a6e5cb,
    #c1c1c1c2
  );
  margin-top: 3%;
  height: 640px;
  width: 100%;
  position: relative;
`;

// 원형 1
export const Circle1 = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  left: 330px;
  /* top: 336px; */
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(193, 233, 242, 0.4) 26.98%,
    rgba(224, 228, 230, 0) 100%
  );
`;

// 원형 2
export const Circle2 = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  left: 568px;
  /* top: 336px; */
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    rgba(243, 211, 226, 0.4) 0%,
    rgba(243, 211, 226, 0) 100%
  );
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

// 텍스트 설명 1
export const Textline = styled.div`
  position: absolute;
  width: 600px;
  height: 70px;
  left: 160px;
  top: 240px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 61px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  opacity: 0;
  animation: ${fadeIn2} 1s ease-in-out forwards;

  color: #ffffff;
`;

// 텍스트 설명 2
export const Textline2 = styled.div`
  position: absolute;
  width: 530px;
  height: 66px;
  left: 160px;
  top: 300px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  opacity: 0;
  animation: ${fadeIn2} 1s ease-in-out forwards;

  color: #ffffff;
`;
// 컴퓨터 이미지
export const Maincomputer = styled.img`
  position: absolute;
  width: 305px;
  height: 185px;
  left: 80%;
  top: 62%;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

// 텍스트의 시작
export const Starttext = styled.div`
  position: absolute;
  width: 347px;
  height: 79px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  letter-spacing: -0.05em;
  opacity: 0;
  animation: ${fadeIn2} 1s ease-in-out forwards;

  color: #636363;
  /* animation */
  transition: background-color 0.3s ease-in-out;
  &:hover {
    animation: ${changeBackground} 1s ease-in-out;
  }
`;

//입력 배경 공간
export const ResumeBox = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
  left: 10%;

  margin-top: 2%;

  font-family: 'Inter';
  font-style: 'normal';
  font-weight: 800;
  font-size: 50px;
  line-height: 61px;
  color: #808080;
`;
//부제 공간
export const SubText = styled.div`
  padding: 0.5% 0 0 0;
  width: 90%;

  font-family: 'Inter';
  font-style: 'normal';
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: #d9d9d9;
`;

export const Textarea = styled.div`
  width: 90%;
  height: 780px;

  margin-top: 1%;

  display: flex;
  align-items: center;
  flex-direction: column;

  border: 1px solid rgba(128, 128, 128, 0.8);
  border-radius: 20px;
`;

export const TitleInput = styled.input<{ maxLength: number }>`
  width: 80%;
  height: 110px;

  margin: 1% 0 0 0%;
  padding-left: 1%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  border-radius: 20px;
`;

export const DocArea = styled.textarea<{ maxLength: number }>`
  width: 80%;
  height: 90%;

  margin: 1% 0 1% 0;
  padding: 1% 0 0 1%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  border-radius: 20px;

  resize: none;
`;

export const TextCount = styled.div`
  width: 80%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

export const ReusltButton = styled.button`
  width: 50%;
  height: 65px;

  margin-bottom: 2%;

  display: flex;
  justify-content: center;

  background: #67bf8c;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 90%;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  border: none;

  cursor: pointer;
`;
