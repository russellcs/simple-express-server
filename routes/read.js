const express = require("express");
const { getUser } = require("../mysql/queries");
const router = express.Router();

router.get("/", async (req, res) => {
  const results = await req.asyncMySQL(getUser(req.headers.token));

  if (results.length === 0) {
    res.send({ status: 0, error: "User not found" });
    return;
  }

  res.send({ status: 1, result: results[0] });
});

module.exports = router;
