import React, { PropsWithChildren } from 'react';
import * as SC from './ModalSC';

interface Props {
  onClickToggleModal: () => void;
}

function Modal({ onClickToggleModal, children }: PropsWithChildren<Props>) {
  return (
    <SC.ModalContainer>
      <SC.DialogBox>
        {children}
        <SC.ListTitleDiv>목차</SC.ListTitleDiv>
        <SC.NavDiv>제목</SC.NavDiv>
      </SC.DialogBox>
      <SC.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </SC.ModalContainer>
  );
}

export default Modal;
