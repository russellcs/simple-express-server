require("dotenv").config();
const express = require("express"); //the import
const app = express(); //create an instance
const { simpsons } = require("./data/simpsons");
const { random } = require("./utils");

simpsons.forEach((element) => {
  element.id = random(10000000);
  element.characterDirection = element.characterDirection.toLowerCase();
});

//middleware
app.use(express.static("public")); //handle static files
app.use(express.json()); //turns the body into an object

//custom middleware
app.use((req, res, next) => {
  req.simpsons = simpsons;
  next();
});

//route middleware
app.use("/delete", require("./routes/delete"));
app.use("/read", require("./routes/read"));
app.use("/create", require("./routes/create"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
