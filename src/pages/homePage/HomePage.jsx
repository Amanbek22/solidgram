import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import Preloader from "../../components/preloader/Preloader";
import SideBar from "../../components/sideBar/SideBar";
import css from "./HomePage.module.css";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://605b21f027f0050017c063b9.mockapi.io/api/v3/posts')
      .finally(() => setLoading(false))
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  if(isLoading) return <Preloader />;
  return (
    <div className="pageContainer">
      <SideBar />
      <div className={css.content}>
        <div className={css.innerContent}>
          <div className={css.storis}>Storis</div>
          <div className={css.posts}>
            {
              posts.map((item) => (
                <Post key={item.id} {...item} />
              )) // [<Post />, <Post />]
            }
          </div>
        </div>
        <div className={css.recomendation}>Recomendation</div>
      </div>
    </div>
  );
}

export default HomePage;
