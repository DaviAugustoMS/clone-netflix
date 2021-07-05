import React from "react";

import { MenuLeft, MenuRight } from "../index";

import Logo from "../../assets/logo.svg";

import "./styles.scss";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="container__logo-box">
          <img
            src={Logo}
            alt="Logo NetFlix"
            className="container__logo-box__logo"
          />
        </div>
        <div className="container__menu">
          <MenuLeft />
          <MenuRight />
        </div>
      </div>
    </header>
  );
}
