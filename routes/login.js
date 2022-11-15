const express = require("express");
const { simpsons } = require("../data/simpsons");
const { checkCreds, addToken } = require("../mysql/queries");
const { getUniqueId } = require("../utils");
const router = express.Router();
const sha256 = require("sha256");
const chalk = require("chalk");

router.post("/", async (req, res) => {
  console.log(chalk.blue("Request body: ", JSON.stringify(req.body)));
  let { email, password } = req.body;

  if (!email || !password) {
    res.send({ status: 0, error: "Invalid input data" });
  }

  password = sha256(process.env.SALT + password);

  const query = checkCreds();

  const params = [email, password];

  const results = await req.asyncMySQL(query, params);

  //if creds do not match
  if (results.length === 0) {
    res.send({ status: 0, error: "Incorrect email and/or password" });
    return;
  }

  const token = getUniqueId(64);

  await req.asyncMySQL(addToken(results[0].id, token));

  res.send({ status: 1, token });
});

module.exports = router;
