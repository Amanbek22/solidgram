import React from "react";
import css from "./Post.module.css";

function Post(props) {
  return (
    <div className={css.wrapper}>
      <div>{props.author}</div>
      <div className={css.image}>
        <img
          src={props.image}
          alt="Image"
        />
      </div>
      <div>Actions Likes:{props.like}</div>
      <div>Info</div>
    </div>
  );
}

export default Post;
