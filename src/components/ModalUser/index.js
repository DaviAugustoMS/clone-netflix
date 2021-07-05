import React from "react";
import "./styles.scss";
import { FaCaretUp } from "react-icons/fa";
export function ModalUser() {
  return (
    <>
      <FaCaretUp color="#fff" />
      <div className="modal">
        <div className="modal__users">
          <div className="modal__users__user">
            <div className="modal__users__user__box-user" />
            <strong>Davi Augusto</strong>
          </div>
          <div className="modal__users__user">
            <div className="modal__users__user__box-user" />
            <strong>Davi Augusto</strong>
          </div>
          <div className="modal__users__user">
            <div className="modal__users__user__box-user" />
            <strong>Davi Augusto</strong>
          </div>
          <div className="modal__users__user">
            <div className="modal__users__user__box-user" />
            <strong>Davi Augusto</strong>
          </div>
        </div>
        <span className="modal__config">Gerenciar perfis</span>
        <div className="modal__line">
          <span>Conta</span>
          <span>Centro de ajuda</span>
          <span>Sair da NetFlix</span>
        </div>
      </div>
    </>
  );
}
