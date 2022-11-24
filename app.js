require("dotenv").config();
const asyncMySQL = require("./mysql/connection");
const checkDBStatus = require("./tests/sql");
const express = require("express"); //the import
const app = express(); //create an instance
const { checkToken } = require("./middleware/auth");
const { addToLog } = require("./middleware/logging");
const cors = require("cors");
const helmet = require("helmet");

//generic middleware
app.use(helmet());

app.use(cors());

//check the db status
checkDBStatus(asyncMySQL);

//middleware
app.use(express.static("public")); //handle static files
app.use(express.json()); //turns the body into an object

//utility middleware
app.use((req, res, next) => {
  req.asyncMySQL = asyncMySQL;
  next();
});

//logging middleware
app.use(addToLog);

//route middleware

//no auth needed
app.use("/create", require("./routes/create"));
app.use("/login", require("./routes/login"));

//auth needed
app.use("/delete", checkToken, require("./routes/delete"));
app.use("/read", checkToken, require("./routes/read"));
app.use("/update", checkToken, require("./routes/update"));
app.use("/logoff", checkToken, require("./routes/logoff"));

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port} `);
});
