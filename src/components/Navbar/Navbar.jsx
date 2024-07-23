import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.image}>
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663478f10d661c2963836ced_trendzy.svg"
          alt=""
        />
      </div>
      <div className={style.menu}>
        <span>Home</span>
        <span>About</span>
        <span>Page </span>
      </div>
      <div className={style.icons}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar;
