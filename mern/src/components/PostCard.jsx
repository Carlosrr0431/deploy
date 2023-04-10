import React from "react";

import toast from "react-hot-toast";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export const PostCard = ({ post }) => {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handledDelete = (_id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete? <strong>{post.title}</strong>{" "}
          </p>

          <div>
            <button
              onClick={() => {
                deletePost(_id);
                toast.dismiss(t.id);
              }}
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
            >
              {" "}
              Delete{" "}
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounde-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handledDelete(post._id);
            }}
            className="bg-red-600 text-sm px-2 py-2 mr-1 rounded-sm mt-2 rounded-sm  hover:bg-red-500"
          >
            Delete
          </button>

          <button
            onClick={() => navigate(`/posts/${post._id}`)}
            className="bg-blue-600 text-sm px-2 py-2 rounded-sm mt-2 rounded"
          >
            Modificar
          </button>
      
        </div>

        <p>{post.description}</p>
      </div>

      {post.image && <img src={post.image.url} className="object-cover h-96 w-full" />}
    </div>
  );
};
