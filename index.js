const express = require('express');
const path = require('path');

const app = express();

//Set static folder for static websites
app.use(express.static(path.join(__dirname, "public"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});