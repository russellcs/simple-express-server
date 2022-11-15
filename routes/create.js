const express = require("express");
const { createUser } = require("../mysql/queries");
const router = express.Router();
const { getUniqueId } = require("../utils");
const sha256 = require("sha256");
const sendEmail = require("../email/sib");
const welcome = require("../email/templates/welcome");

router.post("/", async (req, res) => {
  let { name, email, password } = req.body;

  //check we have all the data
  if (name && email && password) {
    password = sha256(process.env.SALT + password);

    const result = await req.asyncMySQL(createUser(name, email, password));

    if (result.affectedRows === 1) {
      //send a welcome
      // sendEmail(email, "Thanks for creating an account", welcome("Some data"));
      res.send({ status: 1 });
    } else {
      res.send({ status: 0, error: "Duplicate entry" });
    }

    return;
  }

  res.send({ status: 0, error: "Some data missing" });
});

module.exports = router;
