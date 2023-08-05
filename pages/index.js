import AllBlogs from "@/components/AllBlogs/AllBlogs";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Home({ blogdata }) {
  return (
    <div>
      <div className="flex justify-evenly  items-center">
        <h1 className="text-center my-10 font-bold text-[25px] ">
          Assignment Task
        </h1>
        <Link href="/createblog">
          <button className="bg-red-500 py-2 px-3 text-white font-bold text-[15px] rounded">
            Create blog
          </button>
        </Link>
      </div>
      <AllBlogs blogdata={blogdata} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:5000/posts");

  return {
    props: {
      blogdata: response.data,
    },
  };
};
