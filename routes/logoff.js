const express = require("express");
const { removeToken } = require("../mysql/queries");
const router = express.Router();

router.delete("/", async (req, res) => {
  await req.asyncMySQL(removeToken(req.headers.token));

  res.send({ status: 1 });
});

module.exports = router;
