import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import "./Post.scss";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card className="card">
      <div className="card_container">
        <Typography variant="h5">{post.shopname}</Typography>
        <Button size="small" onClick={() => setCurrentId(post._id)}>
          Edit
        </Button>
      </div>

      <div className="card_area">Area: {post.area}</div>
      <div className="card_category">Category: {post.category}</div>

      <div className="card_opendate">
        Opening Date: {new Date(post?.opening_date)?.toLocaleDateString()}
      </div>
      <div className="card_closedate">
        Closing Data: {new Date(post?.closing_date)?.toLocaleDateString()}
      </div>

      <Button
        size="small"
        color="primary"
        onClick={() => {
          dispatch(deletePost(post._id));
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default Post;
