const express = require("express");
const router = express.Router();
const { updateUser } = require("../mysql/queries");
const sha256 = require("sha256");

router.put("/", async (req, res) => {
  let { email, name, password } = req.body;
  const { token } = req.headers;

  if (email && typeof email === "string") {
    await req.asyncMySQL(updateUser(token, "email", email));
  }
  if (name && typeof name === "string") {
    await req.asyncMySQL(updateUser(token, "name", name));
  }
  if (password && typeof password === "string") {
    password = sha256(process.env.SALT + password);
    await req.asyncMySQL(updateUser(token, "password", password));
  }

  res.send({ status: 1 });
});

module.exports = router;
