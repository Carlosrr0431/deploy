import { Link } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { PostCard } from "../components/PostCard";


export const HomePage = () => {
  const { posts } = usePosts();

  if (posts.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are not posts</h1>

        <Link to="/news" className="text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600">Create New Posts</Link>
      </div>
    );
  }

  return (
    <>
      <div className="text-white">
        <header className="flex justify-between py-4">
          <h1 className="text-2xl text-gray-300 font-bold"> Posts ({posts.length}) </h1>

          <Link to="/news" className="text-white px-3 py-2 bg-indigo-500 hover:bg-indigo-600">Create New Posts</Link>
        </header>

        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
};
