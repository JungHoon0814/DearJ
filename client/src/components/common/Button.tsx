import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: rgba(111, 207, 151, 1);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  padding-block: 10px;
  padding-inline: 50px;
  text-align: center;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background-color: rgba(77, 164, 113, 1);
  }
`;

export default StyledButton;
