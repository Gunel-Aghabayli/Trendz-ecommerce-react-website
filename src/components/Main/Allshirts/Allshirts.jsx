import React from "react";
import style from "./Allshirts.module.css";

const Allshirts = (props) => {
  return (
    <div>
      <h1 className={style.recent}>Recent products</h1>
      <div className={style.shirt}>
        {props.data.map((item) => (
          <div className={style.cube}>
            <div>
              <img className={style.img} src={item.src} />
            </div>
            <div className={style.title}>{item.title}</div>
            <div>{item.price}$</div>
            <div>{item.gender}</div>
            <div>{item.material}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allshirts;
