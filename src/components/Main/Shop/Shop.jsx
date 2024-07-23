import React from "react";
import style from "./Shop.module.css";
const Shop = () => {
  return (
    <div className={style.shop}>
      <div>
        <img
          className={style.image1}
          src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607db64f61d2d8da10d113b_men-p-800.jpg"
        />
      </div>
      <div className={style.category}>
        <p>Shop by category</p>
        <button>View All Products</button>
        <div className={style.images}>
          <img
            className={style.image2}
            src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607db6de825fc2c60ca4ce2_women-p-500.jpg"
          />
          <img
            className={style.image2}
            src="https://assets-global.website-files.com/6607bf6b9d59d5c6248298a2/6607dc963f551ea6b785022f_kid-p-500.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
