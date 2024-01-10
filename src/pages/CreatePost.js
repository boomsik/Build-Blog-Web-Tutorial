import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {
                name: auth.currentUser.displayName,
                email: auth.currentUser.email,
                id: auth.currentUser.uid,
            },
        });
        navigate("/");
    };

    useEffect(() => {
        if (isAuth === null) {
            navigate("/login");
        }
    });
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
                <button type="button" onClick={createPost}>
                    Submit post
                </button>
            </div>
        </div>
    );
}

export default CreatePost;
