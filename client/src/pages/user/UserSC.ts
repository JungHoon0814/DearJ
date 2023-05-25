import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin: 3% 0 5% 0;
  /* border: 4px groove red; */
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  /* border: 4px groove blue; */
`;

export const Left = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 4px groove red; */
`;

export const Right = styled.div`
  flex: 1;
  /* border: 4px groove red; */
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 10%;
  /* border: 4px groove blue; */
`;

export const MainTitle = styled.div`
  height: 50%;
  font-weight: 700;
  font-size: 4vmin;
  margin: 0 0 0 5%;
  /* border: 4px groove red; */
`;

export const BtnWrap = styled.div`
  width: 36%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 0 1% 60%;
`;

//표
export const Table = styled.table`
  width: 92%;
  border-collapse: collapse;
  margin: 0 0 0 5%;
  /* border: 4px groove red; */

  th {
    background-color: rgba(111, 207, 151, 1);
    padding: 12px;
    text-align: center;
    font-weight: bold;
  }

  td {
    padding: 18px;
    text-align: center;
    border-bottom: 1px solid rgba(223, 223, 223, 1);
    .btn-wrap {
      width: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .disabled-btn {
        pointer-events: none;
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  th:first-child,
  td:first-child {
    width: 50%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 25%;
    /* border: 4px groove yellow; */
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 25%;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */

  .content-wrap {
    width: 85%;
    /* border: 1px solid blue; */
    .content-box {
      border: 1px solid rgba(217, 217, 217, 1);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 3% 3% 3% 3%;
      margin: 2% 0 2% 0;
      p {
        font-size: 18px;
        font-weight: 600;
        padding: 0% 0 1% 0;
      }
    }
    .content-length-wrap {
      display: flex;
      justify-content: flex-start;
      .content-length {
        color: rgba(217, 217, 217, 1);
        font-weight: 700;
        margin: 0 0 2% 0;
        span {
          color: rgba(103, 191, 140, 1);
        }
      }
    }
    .feedback-box {
      background-color: rgba(217, 217, 217, 0.3);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0% 0 0% 0;
      p {
        font-size: 18px;
        font-weight: 600;
        padding: 3% 0 1% 3%;
      }
      img {
        height: 3vmin;
        margin: 0 0 0 5px;
      }
      .feedback-total {
        padding: 1% 0 2% 3%;
      }
      .feedback-detail {
        padding: 1% 0 1% 3%;
        border: 1px solid red;
        .feedback-detail-num {
          display: flex;
          span {
            justify-content: flex-start;
            color: rgba(244, 33, 33, 1);
            font-weight: 700;
          }
        }
      }
    }
    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2% 0 2% 0;
      .btn-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const BottomBtnWrap = styled.div`
  width: 92%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2% 0 0 5%;
  /* border: 4px groove yellow; */
`;

export const ProfileBox = styled.div`
  width: 90%;
  height: 20%;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  .profile-text {
    margin: 0 0 0 5%;
    .nickname {
      font-weight: 700;
      margin: 0 0 8% 0;
    }
    .user-email {
      font-weight: 500;
      color: rgba(128, 126, 126, 1);
      margin: 0 0 3% 0;
    }
  }
`;

export const MenuWrap = styled.div`
  height: 8%;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .selected-menu {
    font-weight: 700;
    color: rgba(77, 164, 113, 1);
  }
`;

export const InfoBox = styled.div`
  width: 60%;
  height: 40%;
  margin: 5% 0 0 0;
  background-color: rgba(217, 217, 217, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  form {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .my-info-auth {
      width: 60%;
      height: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .user-email {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        label {
          font-weight: 600;
        }
        div {
          width: 70%;
        }
      }
      .user-pw {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .pw {
          font-weight: 600;
        }
        .form-field {
          width: 70%;
          input {
            width: 100%;
            height: 6vmin;
            background-color: inherit;
            border: 1px solid rgba(103, 103, 103, 1);
            border-radius: 5px;
          }
        }
      }
    }
  }

  /* 
  form {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .user-email {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px groove blue;
      label {
        width: 40%;
        border: 4px groove pink;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 4px groove red;
    label {
      font-size: 20px;
      font-weight: 600;
      border: 4px groove blue;
    }
    .form-field {
      width: 60%;
      padding: 5px 0 0 0;
      border: 4px groove blue;
      input {
        width: 100%;
        height: 6vmin;
        background-color: inherit;
        border: 1px solid rgba(103, 103, 103, 1);
        border-radius: 5px;
      }
    }
  } */
`;

export const UnderLine = styled.hr`
  width: 90%;
  height: 1px;
  background: rgba(223, 223, 223, 1);
  border: none;
  margin: 3vh 0 5vh 0;
`;

export const TextButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: rgba(128, 126, 126, 1);
  cursor: pointer;
`;

//myInfo
export const MenuTab = styled.div`
  width: 60%;
  text-align: center;

  .info-form-wrap {
    width: 100%;
    height: 75vh;
    display: flex;
    flex-direction: column;
    font-size: 18px;

    .error-msg {
      color: red;
      font-size: 14px;
      padding-top: 10px;
      /* border: 4px groove red; */
    }
    form {
      height: 55%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 8% 0 0 0;
      margin: 0 0 2vh 0;
      div {
        width: 50%;
        .form-field {
          width: 100%;
          padding: 5px 0 0 0;
          /* border: 1px groove blue; */
          input {
            width: 100%;
            height: 6vmin;
            background-color: inherit;
            border: 1px solid rgba(103, 103, 103, 1);
            border-radius: 5px;
          }
        }
      }
    }
    .delete-account {
      height: 40%;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
        font-weight: 700;
        color: red;
        padding: 0 0 8% 0;
      }
    }
  }
  .tabs {
    display: flex;
    /* border: 4px groove red; */
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

export const TabBottomLine = styled.div`
  width: 100%;
  display: flex;
  height: 10px;
  .myinfo {
    width: 50%;
    background-color: rgba(123, 189, 151, 1);
    border-radius: 5px 0 0 5px;
    transition: 0.3s;
  }

  .deleteaccount {
    width: 50%;
    background-color: rgba(123, 189, 151, 1);
    border-radius: 0 5px 5px 0;
    transition: 0.3s;
  }

  .none-left {
    width: 50%;
    background-color: rgba(218, 218, 218, 1);
    border-radius: 5px 0 0 5px;
    transition: 0.3s;
  }

  .none-right {
    width: 50%;
    background-color: rgba(218, 218, 218, 1);
    border-radius: 0 5px 5px 0;
    transition: 0.3s;
  }
`;

export const FilterButton = styled.button`
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

//모달
//로그아웃,삭제 모달
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

export const ModalWrap = styled.div`
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

//수정 모달
export const PatchModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  background-color: white;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  max-height: none;
  overflow-y: auto;
`;

export const PatchModalWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .patch-text-wrap {
    width: 85%;
    display: flex;
    justify-content: left;
    /* border: 1px solid red; */
    span {
      padding: 3% 0 3% 0;
      font-size: 24px;
      font-weight: 600;
      margin: 2% 0 0 0;
      /* border: 1px solid red; */
    }
  }
  form {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% 0 0 0;
    .patch-text {
      display: flex;
      flex-direction: column;
      align-items: left;

      input {
        border: 1px solid rgba(217, 217, 217, 1);
        border-radius: 10px;
        padding: 3% 3% 3% 3%;
        margin: 2% 0 2% 0;
        outline: none;
      }
      textarea {
        height: 400px;
        border: 1px solid rgba(217, 217, 217, 1);
        border-radius: 10px;
        padding: 3% 3% 3% 3%;
        margin: 2% 0 2% 0;
        outline: none;
      }
    }
    .content-length-wrap {
      display: flex;
      justify-content: flex-start;
      .content-length {
        color: rgba(217, 217, 217, 1);
        font-weight: 700;
        margin: 0 0 2% 0;
        span {
          color: rgba(103, 191, 140, 1);
        }
      }
    }
    .patch-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .patch-btn-wrap {
        width: 50%;
        display: flex;
        justify-content: space-between;
        margin: 4vmin 0 4vmin 0vmin;
      }
    }
  }
`;
