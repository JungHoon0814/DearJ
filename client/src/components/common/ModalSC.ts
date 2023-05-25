import styled from 'styled-components';

export const ModalContainer = styled.div`
    width : 100%
    height: 100%
    border : 1px solid black;
    align-items : center;
    justify-content: center;
    position : fixed;
`;

export const DialogBox = styled.div`
  position: fixed;
  top: 17%;
  left: 36%;
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  ailgn-items: center;
  border: 2px solid black;
  border-radius: 30px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.3);
  box-sizing: border-box;
  z-index: 10000;
  background: white;
`;

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  backgroud-color: rgba(0, 0, 0, 0.2);
`;

export const ListTitleDiv = styled.div`  
  width: 100%;
  
  margin-top: 5%;
  font-family: 'Inter';
  font-style: normal;
  font weight: 900;
  font-size: 30px;

  display: flex;
  justify-content: center;
  color: #7bbd97;
`;

export const NavDiv = styled.div`
  width: 100%;
  height: 8%;

  margin-top: 3%;
  padding-left: 5%;
  display: flex;
  align-items: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #ffffff;

  background: #7bbd97;
`;
