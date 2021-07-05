import React, { useState } from "react";
import "./styles.scss";

import { FaSearch, FaBell, FaCaretDown, FaCaretUp } from "react-icons/fa";

import { ModalUser } from "../ModalUser";

export function MenuRight() {
  const [modalUser, setModalUser] = useState(false);

  return (
    <>
      <nav className="menu-right">
        <FaSearch color="#fff" />
        <a href="#">INFANTIL</a>
        <FaBell color="#fff" />

        <button className="menu-right__user-box" />
        {!modalUser ? <FaCaretUp color="#fff" /> : <FaCaretDown color="#fff" />}
      </nav>
      {!modalUser && (
        <div className="modal-user">
          <ModalUser />
        </div>
      )}
    </>
  );
}
