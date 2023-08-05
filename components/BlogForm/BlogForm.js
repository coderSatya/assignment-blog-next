import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [summary, setSummary] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, publicationDate, summary };

    try {
      const response = await axios.post("http://localhost:5000/posts", newPost);
      router.push("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return (
    <div className="grid grid-cols-1 w-[70%] m-auto">
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="publicationDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Publication Date:
          </label>
          <input
            type="date"
            id="publicationDate"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="summary"
            className="block text-gray-700 font-bold mb-2"
          >
            Summary:
          </label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-indigo-500"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
