import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className={styles.headerMainContainer}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles.headerRight}>
          <li>
            <NavLink to="/">Book Entry</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
