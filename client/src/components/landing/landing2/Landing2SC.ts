import styled from 'styled-components';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(0);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(2%);
//   }
// `;

// ---------- 랜딩2 페이지의 전체 크기값 설정 ----------
export const LandingDiv2 = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  /* padding: 100px, 0, 0, 0; */
`;

// ---------- 텍스트의 전체 CSS 정의 ----------
export const TitleText = styled.p`
  position: absolute;
  top: 10%;
  width: 100%;
  height: 35%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 24px;
  text-align: center;
  color: #000;
`;

// ---------- 서비스 설명 및  사용 방법 설명 ----------
export const InstructionsForUse = styled.div`
  position: relative;
  box-sizing: border-box;
  border: 2px solid #b6b6b6;
  border-radius: 20px;
  top: 35%;
  width: 90%;
  height: 50%;
  left: 6vw;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

// ---------- 서비스 설명 관련 타이틀 ----------
export const Title1 = styled.p`
  position: absolute;
  width: 100%;
  height: auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 24px;
  top: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;
// ---------- 원형 전체를 감싸는 테두리 ----------
export const StepDiv = styled.div`
  position: relative;
  width: 80vw;
  height: 100%;
  /* ---------- 테두리 안의 원형 ---------- */
  .circle1 {
    box-sizing: border-box;
    position: relative;
    border: 2px solid #358f5b;
    width: 20%;
    height: 65%;
    border-radius: 50%;
    top: 30%;
    left: 3%;
    background: linear-gradient(
      to bottom right,
      #099142,
      #259f5b,
      #42b97c,
      #5dce9d,
      #82ddb7,
      #a6e5cb,
      #c1c1c1c2,
      #ffffff
    );

    .text1 {
      position: absolute;
      top: 28%;
      left: 30%;
      text-align: center;
      font-size: medium;
      font-family: 'Inter';
      font-weight: 500;
    }
  }
  .circle2 {
    box-sizing: border-box;
    position: absolute;
    border: 2px solid #358f5b;
    width: 20%;
    height: 65%;
    border-radius: 50%;
    top: 30%;
    left: 31%;
    background: linear-gradient(
      to bottom right,
      #099142,
      #259f5b,
      #42b97c,
      #5dce9d,
      #82ddb7,
      #a6e5cb,
      #c1c1c1c2,
      #ffffff
    );

    .text2 {
      position: absolute;
      top: 20%;
      left: 32%;
      line-height: 5vh;
      text-align: center;
      font-size: medium;
      font-family: 'Inter';
      font-weight: 500;
    }
  }
  .circle3 {
    box-sizing: border-box;
    position: absolute;
    border: 2px solid #358f5b;
    width: 20%;
    height: 65%;
    border-radius: 50%;
    top: 30%;
    left: 59%;
    background: linear-gradient(
      to bottom right,
      #099142,
      #259f5b,
      #42b97c,
      #5dce9d,
      #82ddb7,
      #a6e5cb,
      #c1c1c1c2,
      #ffffff
    );

    .text3 {
      position: absolute;
      top: 20%;
      left: 6vw;
      line-height: 5vh;
      text-align: center;
      font-size: medium;
      font-family: 'Inter';
      font-weight: 500;
    }
  }
  .circle4 {
    box-sizing: border-box;
    position: absolute;
    border: 2px solid #358f5b;
    width: 20%;
    height: 65%;
    border-radius: 50%;
    top: 30%;
    left: 87%;
    background: linear-gradient(
      to bottom right,
      #099142,
      #259f5b,
      #42b97c,
      #5dce9d,
      #82ddb7,
      #a6e5cb,
      #c1c1c1c2,
      #ffffff
    );

    .text4 {
      position: absolute;
      top: 20%;
      left: 4vw;
      line-height: 5vh;
      text-align: center;
      font-size: medium;
      font-family: 'Inter';
      font-weight: 500;
    }
  }
  /* ---------- 원형 안에 텍스트 ---------- */
`;
