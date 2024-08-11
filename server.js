const express = require("express");
const app = express();
const path = require('path')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname , 'public','index.html'))
}) ;
app.get('/about',(req,res) => {
  res.sendFile(path.join(__dirname , 'public','about.html'))

}) ;





//server port listen
app.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
