import React from "react";
import logo from "../../assets/svg/logo.png";
import { useState } from "react";
import "./style.css";
import Overlay from "../overlay/Overlay";

export default function SideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const openMenu = () => {
    setSideBarOpen(true);
  };

  const closeMenu = () => {
    setSideBarOpen(false);
  };

  return (
    <>
      {!sideBarOpen ? (
        <div className="menu__btn" onClick={openMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>
      ) : (
        <>
          <div onClick={closeMenu}>
            <Overlay />
          </div>
          <div className="sidebar">
            <div className="nav__link__logo">
              <div className="logo">
                <img src={logo}></img>
                Abdulvoxid Yuldashev
              </div>
              <i class="fa-solid fa-xmark" onClick={closeMenu}></i>
            </div>
            <ul className="nav__links__sidebar">
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">About me</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
            <button className="gmail__btn__sidebar">abduvoxidyuldashev@gmail.com</button>
          </div>
        </>
      )}
    </>
  );
}
