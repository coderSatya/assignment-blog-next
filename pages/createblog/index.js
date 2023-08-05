// pages/CreateBlog.js
import BlogForm from "@/components/BlogForm/BlogForm";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CreateBlog = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto mt-8">
      <Link href="/">
        <button className="bg-red-500 py-2 px-3 mx-10 text-white font-bold text-[15px] rounded">
          Go Back
        </button>
      </Link>
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Create a New Blog
      </h1>
      <BlogForm />
    </div>
  );
};

export default CreateBlog;
