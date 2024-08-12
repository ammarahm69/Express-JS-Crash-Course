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

export default router;
