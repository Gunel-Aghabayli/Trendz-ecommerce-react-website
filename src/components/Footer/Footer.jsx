import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.section}>
        <p className={style.ptag}>Pages</p>
        <p>Home</p>
        <p>About</p>
        <p>Shop All</p>
        <p>Blog</p>
        <p>Contact</p>
        <p>Privacy policy</p>
        <p>PagesFAQs</p>
      </div>
      <div className={style.section}>
        <p className={style.ptag}>Utility pages</p>
        <p>Style guide</p>
        <p>Instructions</p>
        <p>Licenses</p>
        <p>Changelog</p>
        <p>Link in Bio</p>
        <p>Coming soon</p>
        <p>Error 404</p>
        <p>Password Protected</p>
      </div>
      <div className={style.section}>
        <p className={style.ptag}>Contact</p>
        <p>example@gmail.com</p>
        <div className={style.icons}>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-dribbble"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
        <p className={style.design}>
          Designed by Webestica, Powered by Webflow
        </p>
      </div>
      <div className={style.section}>
        <img
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/66347926b0f676a83b2f97f6_trendzy-light.svg"
          alt=""
        />
        <p className={style.subs}>
          Subscribe and get 15% off your first order.
        </p>
        <div className={style.foot}>
          <input className={style.input} placeholder="Enter your email"></input>
          <span>
            <button className={style.buton}>Subscribe</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
