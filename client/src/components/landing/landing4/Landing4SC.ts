import styled from 'styled-components';

// ---------- 랜딩 전체 컴포넌트 ----------
export const Landing4div = styled.div`
  position: relative;
  left: 5%;
  height: 55vh;
  width: 90%;
  padding-bottom: 5%;
  box-sizing: border-box;
  border: 2px solid #b6b6b6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`;

// ---------- 대기업 랜딩 이미지 모음 박스1 ----------
export const LogoContent1 = styled.div`
  position: relative;
  width: 80%;
  height: 30%;
  left: 9vw;
  display: flex;
  flex-direction: row;
  /*  ---------- 이미지 속성 설정 ---------- */
  img {
    object-fit: contain;
    padding-left: 5%;
    transform: translate(-25%, 24%);
    width: 27%;
    height: 120%;
  }
`;

// ---------- 대기업 랜딩 이미지 모음 박스 2 ----------
export const LogoContent2 = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 80%;
  height: 30%;
  left: 11vw;
  display: flex;
  flex-direction: row;
  /*  ---------- 이미지 속성 설정 ---------- */
  img {
    object-fit: contain;
    padding-left: 5%;
    transform: translate(-20%, 38%);
    width: 30%;
    height: 120%;
  }
`;

// ---------- 텍스트 박스 상자 ----------
export const ContentText = styled.p`
  position: absolute;
  transform: translate(24%, 450%);
  font-size: xx-large;
  font-weight: bolder;
  text-align: center;
`;
