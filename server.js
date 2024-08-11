const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.send({message:'Hello World'});
}) ;





//server port listen
app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
