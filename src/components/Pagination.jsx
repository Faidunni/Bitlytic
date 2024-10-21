import React from "react";

function Pagination({ totalPosts, postsPerPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center mt-4">
      {pages.map((page) => (
        <button
          key={page}
          className="px-3 py-1 mx-1 bg-blue-500 text-white rounded-md"
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
