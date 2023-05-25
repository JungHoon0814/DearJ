import styled from 'styled-components';

// ---------- Landing3의 전체 레이아웃 ----------
export const LandingDiv3 = styled.div`
  overflow: hidden;
  position: relative;
  display: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  // ---------- 컨텐츠 박스 1 ----------
  .content_box1 {
    /* position: absolute; */
    /* display: flex; */
    /* justify-content: flex-start; */
    column-gap: 1vw;
    background: #eaeaea;
    width: 85vw;
    height: 40vh;
    border-radius: 0px 300px 300px 0px;
    // ---------- 텍스트 디자인1 ----------
    .contentdescription1 {
      position: absolute;
      text-align: center;
      font-size: x-large;
      top: 10vh;
      left: 11vw;
      line-height: 6vh;
    }
  }
  // ---------- 컨텐츠 박스 2 ----------
  .content_box2 {
    /* position: absolute; */
    /* display: flex; */
    /* justify-content: flex-end; */
    column-gap: 2vw;
    transform: translate(17.5%, 26%);
    background: #eaeaea;
    /* right: 0; */
    top: 50vh;
    width: 85vw;
    height: 40vh;
    border-radius: 300px 0px 0px 300px;
    // ---------- 텍스트 디자인2 ----------
    .contentdescription2 {
      position: absolute;
      text-align: center;
      font-size: x-large;
      top: 11vh;
      left: 41vw;
      line-height: 6vh;
    }
  }
`;
