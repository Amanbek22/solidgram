import React from "react";
import css from "./Post.module.css";

function Post() {
  return (
    <div className={css.wrapper}>
      <div>aman_taalaibekovh</div>
      <div className={css.image}>
        <img
          src="https://s7d1.scene7.com/is/image/volkswagen/VW_NGW6_Homepage_Vehicle_Large_2022_09_15?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYmRmNQ=="
          alt="Image"
        />
      </div>
      <div>Actions</div>
      <div>Info</div>
    </div>
  );
}

export default Post;
