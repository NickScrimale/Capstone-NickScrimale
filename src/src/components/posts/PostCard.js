import React from 'react';
import "./Post.css";
import { Link } from "react-router-dom";
import { editPost } from '../Modules/PostManager';




export const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="card">
      <div className="card-content">
         {/* <h2 class="post__title">Posted by ${user.id}</h2> */}
         <div class="post__tagline">${post.content}</div>
         
         <div class="post__comment">${post.comment}</div>
        
        <button type="button" onClick={() => handleDeletePost(post.id)}>Delete post</button>
        <button type="button" onClick={() => editPost(post.id)}>Edit post</button>
      </div>
    </div>
  );
}