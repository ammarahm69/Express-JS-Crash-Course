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
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    return res.json(post); //return agr if mei use hojye to else ladder lagane ki zaroot nhi hogi
  }
  res.status(404).json({ message: "Post not found" });
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
  //201 response means that something was created by userx
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
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
