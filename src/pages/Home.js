import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import React, { useEffect, useState, useCallback } from "react";
function Home({ isAuth }) {
    const [postList, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    // const deletePost = async (id) => {
    //     const postDoc = doc(db, "posts", id);
    //     await deleteDoc(postDoc);
    // };

    const deletePost = useCallback(async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        console.log("delete post");
    }, []);
    // useEffect(() => {
    //     const getPost = async () => {
    //         const data = await getDocs(postsCollectionRef);
    //         setPostList(
    //             data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //         );
    //     };
    //     getPost();
    // }, [deletePost]);

    // useEffect(() => {
    //     const getPosts = async () => {
    //         const data = await getDocs(postsCollectionRef);
    //         setPostList(
    //             data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    //         );
    //     };

    //     getPosts();
    // }, [deletePost]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await getDocs(postsCollectionRef);
                setPostList(
                    data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                );
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();
        console.log("read a post");
    }, [deletePost]);
    return (
        <div className="homePage">
            {postList.map((post) => {
                return (
                    <div className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1>{post.title}</h1>
                            </div>
                            <div className="deletePost">
                                {isAuth &&
                                    post.author.id === auth.currentUser.uid && (
                                        <button
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}
                                        >
                                            &#128169;
                                        </button>
                                    )}
                            </div>
                        </div>
                        <div className="postTextContainer">{post.postText}</div>
                        <h3>@{post.author.name}</h3>
                        <h3>{post.author.email}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
