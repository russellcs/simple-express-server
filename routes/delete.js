const express = require("express");
const { deleteUser } = require("../mysql/queries");
const router = express.Router();
const queries = require("../mongoose/connection");

router.delete("/", async (req, res) => {
  // await req.asyncMySQL(deleteUser(req.headers.token));

  const results = await queries.deleteUser(req.headers.name);
  console.log(results);

  if (results.deletedCount === 1) {
    res.send({ status: 1 });
  } else {
    res.send({ status: 0, error: "User not found!" });
  }
});

module.exports = router;
