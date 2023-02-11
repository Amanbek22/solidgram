import React from "react";
import { Link } from "react-router-dom";
import Comment from "../comment/Comment";
import css from "./Post.module.css";

function Post(props) {
  return (
    <div className={css.wrapper}>
      <div>{props.author}</div>
      <Link to={`/post/${props.id}`} className={css.image}>
        <img
          src={props.image}
          alt="Image"
        />
      </Link>
      <div>Actions Likes:{props.like}</div>
      <div>Info</div>
      <div className={css.comments}>
        <b>Comments:</b>
        {
          props.comments.map((item) => <Comment key={item.id}  {...item} /> )
        }
      </div>
    </div>
  );
}

export default Post;
