export {};
// import styled, { keyframes } from 'styled-components';
// import { Link } from 'react-router-dom';

// const mdBreakpoint = `768px`;

// // -------------------- 버튼 전환 효과 --------------------
// const changeBackground = keyframes`
//   0% {
//     background-color: #f5f5f5;
//     border-radius: 20px;
//   }
//   50% {
//     background-color: #c8c8c8;
//     border-radius: 20px;
//   }
//   100% {
//     background-color: #f5f5f5;
//     border-radius: 20px;
//   }
// `;
// // -------------------- 이미지 등장 효과 오른쪽 요소 --------------------
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(30%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;
// // -------------------- 이미지 등장효과 왼쪽요소 --------------------
// const fadeIn2 = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-30%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// // -------------------- 메인 컨테이너 박스 --------------------
// export const Mainbox = styled.div`
//   background: linear-gradient(
//     to right,
//     #08863c,
//     #259f5b,
//     #42b97c,
//     #5dce9d,
//     #82ddb7,
//     #a6e5cb,
//     #c1c1c1c2
//   );
//   margin-top: 3%;
//   height: 640px;
//   width: 100%;
//   position: relative;
// `;

// // -------------------- 원형 1 --------------------
// export const Circle1 = styled.div`
//   position: absolute;
//   width: 340px;
//   height: 340px;
//   left: 330px;
//   /* top: 336px; */
//   border-radius: 50%;
//   background: linear-gradient(
//     180deg,
//     rgba(193, 233, 242, 0.4) 26.98%,
//     rgba(224, 228, 230, 0) 100%
//   );
// `;

// // -------------------- 원형 2 --------------------
// export const Circle2 = styled.div`
//   position: absolute;
//   width: 340px;
//   height: 340px;
//   left: 568px;
//   /* top: 336px; */
//   border-radius: 50%;
//   background: linear-gradient(
//     180deg,
//     rgba(243, 211, 226, 0.4) 0%,
//     rgba(243, 211, 226, 0) 100%
//   );
//   transform: matrix(1, 0, 0, -1, 0, 0);
// `;

// // -------------------- 텍스트 설명 1 --------------------
// export const Textline = styled.div`
//   position: absolute;
//   width: 530px;
//   height: 66px;
//   left: 160px;
//   top: 240px;

//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 800;
//   font-size: 20px;
//   line-height: 24px;
//   display: flex;
//   align-items: center;
//   letter-spacing: -0.05em;
//   opacity: 0;
//   animation: ${fadeIn2} 1s ease-in-out forwards;

//   color: #ffffff;
// `;

// // -------------------- 컴퓨터 이미지 --------------------
// export const Maincomputer = styled.img`
//   position: absolute;
//   width: 20%;
//   height: 32%;
//   top: 62%;
//   right: 2%;
//   opacity: 0;
//   z-index: 99;
//   animation: ${fadeIn} 1s ease-in-out forwards;
// `;

// // -------------------- 자기소개서 파트 이동 버튼 --------------------
// export const Resumebutton = styled(Link)`
//   position: absolute;
//   width: 347px;
//   height: 79px;
//   left: 10.5%;
//   top: 57%;

//   background: #f5f5f5;
//   box-shadow: inset 20px 20px 30px 5px rgba(128, 128, 128, 0.2);
//   border-radius: 20px;
//   opacity: 0;
//   animation: ${fadeIn2} 1s ease-in-out forwards;
//   /* transform: rotate(-180deg); */
// `;

// // -------------------- 텍스트의 시작 --------------------
// export const Starttext = styled.div`
//   position: absolute;
//   width: 347px;
//   height: 79px;

//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 800;
//   font-size: 30px;
//   line-height: 36px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* text-align: center; */
//   letter-spacing: -0.05em;
//   opacity: 0;
//   animation: ${fadeIn2} 1s ease-in-out forwards;

//   color: #636363;
//   /* animation */
//   transition: background-color 0.3s ease-in-out;
//   &:hover {
//     animation: ${changeBackground} 1s ease-in-out;
//   }
// `;

// // -------------------- 피그마에서 퍼센트 그래프 --------------------
// export const Graphbarwarp = styled.div`
//   position: relative;
//   height: 100%;
//   .graph1 {
//     position: absolute;
//     width: 25%;
//     height: 55px;
//     border-radius: 30px;
//     right: 0;
//     top: 10%;
//     margin: 40px;
//     background: linear-gradient(
//       to right,
//       rgba(103, 191, 140, 1) 0%,
//       rgba(138, 231, 177, 0) 100%
//     );
//     animation: ${fadeIn} 1s ease-in-out forwards;
//   }
//   .graph1 .number {
//     position: absolute; /* 부모 요소를 기준으로 위치를 조정하기 위해 */
//     top: 25%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     left: 7.5%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     font-size: 28px;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: bolder;
//     align-items: center;
//     text-align: center;
//     color: #6d6d6d;
//     letter-spacing: -0.05em;
//   }

//   .graph2 {
//     position: absolute;
//     width: 37%;
//     height: 55px;
//     border-radius: 30px;
//     right: 0;
//     top: 45%;
//     background: linear-gradient(
//       to right,
//       rgba(233, 233, 233, 0.9) 0%,
//       rgba(138, 231, 177, 0) 90%
//     );
//     animation: ${fadeIn} 1.1s ease-in-out forwards;
//   }

//   .graph2 .number {
//     position: absolute; /* 부모 요소를 기준으로 위치를 조정하기 위해 */
//     top: 25%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     left: 5%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     font-size: 28px;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: bolder;
//     align-items: center;
//     text-align: center;
//     color: #6d6d6d;
//     letter-spacing: -0.05em;
//   }

//   .graph3 {
//     position: absolute;
//     width: 47%;
//     height: 55px;
//     border-radius: 30px;
//     right: 0;
//     top: 75%;
//     background: linear-gradient(
//       to right,
//       rgba(103, 191, 140, 1) 0%,
//       rgba(138, 231, 177, 0) 90%
//     );
//     animation: ${fadeIn} 1.2s ease-in-out forwards;
//   }

//   .graph3 .number {
//     position: absolute; /* 부모 요소를 기준으로 위치를 조정하기 위해 */
//     top: 25%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     left: 4.5%; /* 부모 요소의 중앙에 위치시키기 위해 */
//     font-size: 28px;
//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: bolder;
//     align-items: center;
//     text-align: center;
//     color: #6d6d6d;
//     letter-spacing: -0.05em;
//   }
// `;
// // ---------- 랜딩페이지 스타일 주기 ----------
// export const landing_main = styled.div`
//   overflow-x: hidden;
//   background-color: #000;
//   word-break: break-all;
//   min-height: calc(100vh - 443px);

//   @media screen and (max-width: ${mdBreakpoint}) {
//     min-height: calc(100vh - 718px);
//   }
// `;
