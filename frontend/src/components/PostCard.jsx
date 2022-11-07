import React from "react";

function PostCard({ post }) {
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom"></div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={post.image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="/" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {post.caption}
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
