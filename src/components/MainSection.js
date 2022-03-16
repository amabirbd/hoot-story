import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import Post from "./Post";

function MainSection() {
  const dispatch = useDispatch();
  const { status, posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
    console.log(typeof posts);
  }, []);

  // const posts = require("../data.json");

  const recentPosts = posts.filter((post) => {
    const publishDate = new Date(post.datetime);
    if (publishDate.getFullYear() > 2021) {
      return post;
    }
  });

  const oldPosts = posts.filter((post) => {
    const publishDate = new Date(post.datetime);
    if (publishDate.getFullYear() <= 2021) {
      return post;
    }
  });

  // let recentPosts = posts.filter((post) => {
  //   let publishDate = new Date(post.datetime);
  //   if(publishDate.getFullYear())
  // });

  console.log(posts);

  console.log(recentPosts);
  console.log(oldPosts);

  return (
    <div className="mainSection">
      <div className="recentPosts">
        <Typography variant="h4">Recent</Typography>
        <ul className="recentPostsList">
          {recentPosts.map((item) => (
            <li key={item.id}>
              <Post post={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="oldPosts">
        <Typography variant="h4">Old</Typography>
        <ul className="oldPostsList">
          {oldPosts.map((item) => (
            <li key={item.id}>
              <Post post={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainSection;
