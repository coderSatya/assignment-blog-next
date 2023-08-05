let blogs = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, publicationDate, summary } = req.body;
    const newBlog = { id: Date.now(), title, publicationDate, summary };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  } else if (req.method === "GET") {
    res.status(200).json(blogs);
  }
}
