import styled from 'styled-components';

export const Maindiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  width: 80%;
  margin: 2% 0 0 10%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 61px;

  color: #676565;
`;
export const TitleInput = styled.input<{ maxLength: number }>`
  width: 80%;
  height: 110px;

  display: flex;
  justitfy-content: center;
  align-items: center;

  margin: 2% 0 0 10%;
  padding-left: 1%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;

  border-radius: 20px;
`;

export const DocTextArea = styled.textarea<{ maxLength: number }>`
  width: 80%;
  height: 600px;

  margin: 2% 0 1% 10%;
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
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0.1% 0 1% 10%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
`;

export const Jobdiv = styled.div`
  width: 80%;

  margin: 4% 0 0 10%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: -0.05em;
`;

export const JobInput = styled.input`
  width: 40vw;

  display: flex;
  justitfy-content: center;
  align-items: center;

  margin: 2% 1% 0 10%;
  padding-left: 1%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 36px;

  border-radius: 10px;
`;

export const DetailInput = styled.input`
  width: 40vw;
  height: 80px;

  display: flex;
  justitfy-content: center;
  align-items: center;

  margin: 2% 10% 0 1%;
  padding-left: 1%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  line-height: 36px;

  border-radius: 10px;
`;

export const Detaildiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Feedbackbutton = styled.button`
  width: 30vw;
  height: 60px;

  margin: 3% 0 0 35%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2.5em;
  letter-spacing: -0.05em;
  color: #ffffff;

  border-radius: 10px;
  border: none;
  background: #6fcf97;

  cursor: pointer;
`;

export const ListButton = styled.button`
  width: 10%;
  height: 40px;

  margin: 0.1% 0 0 30%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 90%;
  background: #ffffff;

  border-color: #6fcf97;
  boreder: 2px;
  border-outline: 0;
  border-radius: 10px;
`;

export const Subdiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Modaldiv = styled.div`
  display: none;
`;
