import React, { useState, createContext, useContext, useEffect } from "react";
import {
  createPostsRequests,
  deletePostRequest,
  gestPostRequest,
  getPostsRequests,
  updatePostRequest,
} from "../api/posts";

const postsContext = createContext();

export const usePosts = () => {
  const context = useContext(postsContext);

  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();

    setPosts(res.data);
  };

  const createPosts = async (newPosts) => {
    const res = await createPostsRequests(newPosts);

    console.log(res);

    setPosts([...posts, res.data]);
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);

    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    const res = await gestPostRequest(id);

    return res.data;
  }

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);

    setPosts(posts.map( post => post._id === id ? res.data : post  ));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postsContext.Provider
      value={{
        posts,
        getPosts,
        createPosts,
        deletePost,
        getPost,
        updatePost
      }}
    >
      {children}
    </postsContext.Provider>
  );
};
