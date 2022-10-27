const express = require("express");
const router = express.Router();

router.delete("/", (req, res) => {
  const indexOfItem = req.simpsons.findIndex((item) => {
    return item.id == req.currentUser.id;
  });

  req.simpsons.splice(indexOfItem, 1);
  res.send({ status: 1 });
});

module.exports = router;
