import styled from 'styled-components';

// ---------- 페이지 전체 컨테이너 -----------
export const AdminContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: 3%, 0, 5%, 0;
`;

export const AdminGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

// ---------- 유저의 목록을 보여주는 왼쪽 사이드 바 ----------
export const AdminLeftSidebar = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AdminRight = styled.div``;

export const AdminTitleGroup = styled.div`
  width: 100%;
  height: 10%;
`;

// ---------- 어드민 페이지 메인 타이틀 ----------
export const AdminMainTitle = styled.div`
  height: 50%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 1em 0 0 2.7em;
`;

// ----------- 어드민 페이지 버튼 양식 ----------
export const AdminBtnGroup = styled.div`
  width: 36%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 1% 60%;
`;

// ----------- 어드민 페이지 표 양식 -----------
export const AdminTable = styled.table`
  width: 92%;
  border-collapse: collapse;
  margin: 0 0 0 5%;

  th {
    background-color: rgba(111, 207, 151, 1);
    padding: 12px;
    text-align: center;
    font-weight: bold;
  }

  td {
    padding: 18px;
    text-align: center;
    font-weight: bold;
  }

  th:first-child,
  td:first-child {
    width: 50%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 25%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 25%;
  }
`;

// ---------- 어드민 페이지 콘텐츠 컨테이너 모음 ----------
export const AdminContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .admincontent-group {
    width: 85%;

    .admincontent-box {
      border: 1px solid rgba(217, 217, 217, 1);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 3%, 0 3%, 3%;
      margin: 2%, 0 2%, 0;

      p {
        font-size: 18px;
        font-weight: 600;
        padding: 0%, 0, 1%, 0;
      }
    }

    .admincontent-length {
      color: red;
      margin: 0, 0, 2%, 0;
    }
    // ---------- 어드민 피드백 박스 ----------
    .feedback-box {
      background-color: rgba(217, 217, 217, 0.3);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0%, 0, 0%, 0;
      div {
        padding: 0, 0, 0, 3%;
        border: 1px solid red;
      }
      p {
        font-size: 18px;
        font-weight: 600;
        padding: 3%, 0, 1%, 3%;
      }
      .adminfeedback-detail {
        padding: 3%, 0, 0, 3%;
      }
    }
    .adminbtn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2%, 0, 2%, 0;
      .adminbtn-group {
        width: 45%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

// ----------- 어드민 버튼 Wrap ----------
export const AdminBottomBtnGroup = styled.div`
  width: 90em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2em 0 0 1em;
`;

// ---------- 어드민 정보 페이지 -----------
export const AdminProfileBox = styled.div`
  width: 90%;
  height: 20%;
  margin: 2em 2em 1em 2em;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  .adminprofile-text {
    margin: 0, 0, 0, 5%;
    .nickname {
      font-weight: 700;
      margin: 0, 0, 8%, 0;
    }
    .admin-email {
      font-weight: 500;
      color: rgba(128, 126, 126, 1);
      margin: 0, 0, 3%, 0;
    }
  }
`;

export const AdminMenuWrap = styled.div`
  height: 8%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  .adminselected-menu {
    font-weight: 700;
    color: rgba(77, 164, 113, 1);
  }
`;

export const AdminInfoBoxGroup = styled.div`
  width: 60%;
  height: 40%;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  font-size: 18px;

  div {
    width: 50%;
    .adminform-field {
      width: 100%;
      padding: 5px, 0, 0;
      input {
        width: 100%;
        height: 6vmin;
        background-color: inherit;
        border: 1px solid rgba(103, 103, 103, 1);
        border-radius: 5px;
      }
    }
  }
`;

export const AdminUnderLine = styled.hr`
  width: 90%;
  height: 1px;
  background: rgba(223, 223, 223, 1);
  border: none;
  margin: 0.2em 0 0.2em 0;
`;

export const AdminTextButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(128, 126, 126, 1);
  cursor: pointer;
`;

// ---------- 어드민 정보 ----------
export const AdminMenuTab = styled.div`
  .tabs {
    display: flex;
    border: 4px groove red;
    li {
      width: 100%;
      text-align: center;
      padding: 30px;
      cursor: pointer;
      color: gray;
      display: flex;
      justify-content: center;

      &:hover {
        font-weight: bold;
        color: black;
        transition: 0.2s;
      }
    }

    .activated {
      color: black;
      font-weight: bold;
    }
  }
`;

export const AdminTabBottomLine = styled.div`
  width: 100%;
  display: flex;
  height: 10px;
  .admininfo {
    width: 50%;
    background-color: rgba(123, 189, 151, 1);
    border-radius: 5px 0 0 5px;
    transition: 0.3s;
  }
  .admindeleteaccount {
    width: 50%;
    background-color: rgba(123, 189, 151, 1);
    border-radius: 0 5px 5px 0;
    transition: 0.3s;
  }

  .adminnone-left {
    width: 50%;
    background-color: rgba(218, 218, 218, 1);
    border-radius: 5px 0 0 5px;
    transition: 0.3s;
  }

  .adminnone-right {
    width: 50%;
    background-color: rgba(218, 218, 218, 1);
    border-radius: 0 5px 5px 0;
    transition: 0.3s;
  }
`;

export const AdminFilterButton = styled.button`
  background-color: white;
  color: rgba(62, 62, 62, 1);
  border: 2px solid rgba(111, 207, 151, 1);
  border-radius: 5px;
  padding-block: 5px;
  padding-inline: 20px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(111, 207, 151, 1);
  }
`;
export const AdminDeleteButton = styled.button`
  background-color: white;
  color: rgba(62, 62, 62, 1);
  border: 2px solid rgba(111, 207, 151, 1);
  border-radius: 5px;
  padding-block: 5px;
  padding-inline: 20px;
  text-align: center;
  transition: 0.3s;
  margin: 1em 5em 0 3em;
  &:hover {
    cursor: pointer;
    background-color: rgba(111, 207, 151, 1);
  }
`;
// ---------- 관리자 모달창 ----------
export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vmin;
  height: 25vmin;
  background-color: white;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const AdminModalWrap = styled.div`
  .logout-text {
    height: 9vmin;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 8% 0 0 8%;
    span {
      font-size: 18px;
      font-weight: 600;
      margin: 2% 0 0 0;
    }
    .logout-icon {
      width: 4vmin;
      height: 4vmin;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(123, 189, 151, 1);
      border-radius: 50%;
      margin: 0 1vmin 0 0;
    }
  }

  .logout-btn {
    border: 1px solid transparent;
    height: 12vmin;
    width: 50vmin;
    background-color: rgba(240, 240, 240, 1);
    border-radius: 5px;

    .logout-btn-wrap {
      border: 1px solid transparent;
      width: 35vmin;
      display: flex;
      justify-content: space-around;
      margin: 4vmin 0 0 12vmin;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
