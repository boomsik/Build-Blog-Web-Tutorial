import React, { useState } from "react";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Creatre a POST</h1>
                <div className="inputGp">
                    <label>Title:</label>
                    <input placeholder="Title..." />
                </div>
                <div className="inputGp">
                    <label>Post:</label>
                    <textarea placeholder="Post..." />
                </div>
                <button type="button">Submit post</button>
            </div>
        </div>
    );
}

export default CreatePost;
