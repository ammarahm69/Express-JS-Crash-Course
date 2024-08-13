import express from "express";
const router = express.Router();
//Build Simple API
const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  res.json(posts);
});

// Get single post by id
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  res.status(200).json(post);
});
//Create new Post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };
  if (!newPost.title) {
    return res.status(404).json({ message: "Please include a title" });
  }
  posts.push(newPost);
  res.status(201).json(posts);
  //201 response means that something was created by user~
});

// PUT Request
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  post.title = req.body.title;
  res.status(200).json(posts);
});

// Delete Request
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).json({ msg: "Post not found" });
  }
  posts.splice(index, 1);
  res.status(200).json(posts);
});

export default router;
