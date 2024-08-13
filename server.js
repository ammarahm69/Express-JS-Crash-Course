import express from "express";
import path from "path";
import post from "./router/post.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
const port = process.env.PORT;
const app = express();

//Body parser Middleware
//This allows us to send form data
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use(logger);
//Set up static folder (app.use ek middleware h jo folder ke ander jitni bhi html fliles h unko routing provide krta ha !)
// app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/post", post);


//Error HANDLER
app.use(errorHandler)

//Server port listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
