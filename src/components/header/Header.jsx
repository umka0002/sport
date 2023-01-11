import React from "react";
import css from "./Header.module.css";
import logo from "../images/while_logo.png"

export default function Header() {
  return (
    <>
      <div className={css.header}>
        <div className={css.logo}>
          <img src={logo} alt="#" />
        </div>
        <div className={css.menu}>
          <div >О нас</div>
          <div>Контакты</div>
        </div>
      </div>
    </>
  );
}
