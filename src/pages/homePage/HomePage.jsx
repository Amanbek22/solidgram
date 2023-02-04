import React from 'react'
import Post from '../../components/post/Post';
import SideBar from '../../components/sideBar/SideBar';
import css from "./HomePage.module.css";

function f(a, b) {
  return a + b
}


f(5,5)
f(10,15)

function HomePage() {
  return (
    <div className='pageContainer'>
        <SideBar />
        <div className={css.content}>
          <div className={css.innerContent}>
            <div className={css.storis}>Storis</div>
            <div className={css.posts}>
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
          </div>
          <div className={css.recomendation}>Recomendation</div>
        </div>
    </div>
  )
}

export default HomePage