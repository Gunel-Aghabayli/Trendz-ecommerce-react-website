import React from "react";
import style from "./Main.module.css";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h1 className={style.title}>The hidden gems in fashion trends</h1>
        <p className={style.description}>
          Step into the realm of unparalleled style with our unbeatable t-shirt
          trendsetter of today.
        </p>
        <div className={style.buttons}>
          <button className={style.buton}>Shop Women</button>
          <button className={style.buton}>Shop Men</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
