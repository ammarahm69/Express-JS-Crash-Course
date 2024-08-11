const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
//Set up static folder (app.use ek middleware h jo folder ke ander jitni bhi html fliles h unko routing provide krta ha !)
app.use(express.static(path.join(__dirname, "public")));

//Build Simple API
const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get single post by id
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    return res.json(post); //return agr if mei use hojye to else ladder lagane ki zaroot nhi hogi
  }
  res.status(404).json({ message: "Post not found" });
});

//Server port listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
