const express = require("express");
const router = express.Router();
const { random } = require("../utils");

router.post("/", (req, res) => {
  const { quote, character, image, characterDirection } = req.body;

  //check we have all the data
  if (quote && character && image && characterDirection) {
    //append a random id
    req.body.id = random(10000000);
    //append the body to the simpsons array
    req.simpsons.push(req.body);
    res.send({ status: 1 });
    return;
  }

  res.send({ status: 0, error: "Some data missing" });
});

module.exports = router;
