import { Typography } from "@mui/material";
import React from "react";

function Post({ post }) {
  const date = new Date(post.datetime).toLocaleDateString();
  return (
    <div>
      <div className="card">
        <div className="left">
          <Typography variant="h6" color="primary">
            {post.title}
          </Typography>
          <Typography variant="body2">{post.body}</Typography>
          <Typography style={{ color: "#444444" }} variant="caption">
            {date}
          </Typography>
        </div>
        <div className="right">
          <img src={post.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Post;
