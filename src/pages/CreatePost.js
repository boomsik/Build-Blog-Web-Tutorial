import React, { useState } from "react";
import { doc } from "firebase/firestore";
function CreatePost() {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const createPost = async () => {};
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Creatre a POST</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input
                        placeholder="Title..."
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea
                        placeholder="Post..."
                        onChange={(e) => {
                            setPostText(e.target.value);
                        }}
                    />
                </div>
                <button type="button">Submit post</button>
            </div>
        </div>
    );
}

export default CreatePost;
