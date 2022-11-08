const express = require("express");
const { deleteUser } = require("../mysql/queries");
const router = express.Router();

router.delete("/", async (req, res) => {
  await req.asyncMySQL(deleteUser(req.headers.token));
  res.send({ status: 1 });
});

module.exports = router;
