import React from "react";
import style from "./Company.module.css";
import Marquee from "react-fast-marquee";
const Company = () => {
  return (
    <div className={style.company}>
      <p>
        Love the quality and style of the clothes I ordered from this website!
        The shipping was super fast too. Definitely my go-to for trendy fashion
        finds!
      </p>
      <div className={style.icons}>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
      <Marquee>
      <div className={style.images}>
        <img
          className={style.img}
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371ef9d6b58d55405bd76_cl-logo-dark-01.svg"
        />
        <img
          className={style.img}
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fa01ad57b79620c213_cl-logo-dark-02.svg"
        />
        <img
          className={style.img}
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fadbde7755b5ea310e_cl-logo-dark-03.svg"
        />
        <img
          className={style.img}
          src="https://assets-global.website-files.com/6607ad03b43fbbc8045dfbf0/663371fa6d681ae8fb3a84e7_cl-logo-dark-04.svg"
        />
      
      </div>
      </Marquee>
    </div>
  );
};

export default Company;
