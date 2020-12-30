const express = require('express');
const path = require('path');

//importing a json file named Members.js using following command.
const members = require ('./Members')

const app = express();

//exporting a REST API where this route gets all members. This is used with Postman to check if json is returned.
app.get("/api/members", (req, res) => res.json(members));

//Set static folder for static websites
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});