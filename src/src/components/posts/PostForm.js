import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../Modules/PostManager';
import './PostForm.css'

export const PostForm = () => {
    const [post, setPost] = useState({
        content: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
		const newPost = { ...post }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newPost[event.target.id] = selectedVal
		setPost(newPost)
	}

    const handleClickSavePost = (event) => {
		event.preventDefault() 

        addPost(post).then(() => navigate("/posts"))
    }


	return (
		<form className="postForm">
			<h2 className="postForm__title">New Post</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="content">Type something:</label>
					<input type="text" id="content" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Post content" value={post.content} />
				</div>
			</fieldset>
            
			<button className="btn btn-primary"
				onClick={handleClickSavePost}>
				Post
          </button>
		</form>
	)
};
