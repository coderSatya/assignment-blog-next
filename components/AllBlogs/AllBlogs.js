import React, { useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const AllBlogs = ({ blogdata }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3; // Number of blog posts to display per page

  const filteredBlogs = blogdata.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const offset = currentPage * postsPerPage;
  const currentPosts = filteredBlogs.slice(offset, offset + postsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <div className="mx-5 w-[30%]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blogs..."
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>
      <div className="grid grid-cols-3">
        {currentPosts.length > 0 ? (
          currentPosts.map((item, index) => (
            <div className="mx-10 my-10" key={index}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.summary}</p>
                  <div className="flex justify-between">
                    <p className="text-black-700 text-base font-semibold my-2 ">
                      {item?.publicationDate}
                    </p>
                    <Link href={`/createblog/${item?.id}`}>
                      <button className="bg-red-500 py-2 px-3 text-white font-bold text-[13px] rounded">
                        More detail
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs found matching your search query.</p>
        )}
      </div>
      <ReactPaginate
        className="flex justify-start p-4 m-2"
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={Math.ceil(filteredBlogs.length / postsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default AllBlogs;
