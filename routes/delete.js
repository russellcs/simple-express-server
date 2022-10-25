const express = require("express");
const router = express.Router();

router.delete("/:id", (req, res) => {
  const idAsNumber = Number(req.params.id);

  //check that a valid number was sent in
  if (!idAsNumber) {
    res.send({ status: 0, error: "No item is set" });
    return;
  }

  const indexOfItem = req.simpsons.findIndex((item) => {
    return item.id == req.params.id;
  });

  if (indexOfItem > -1) {
    req.simpsons.splice(indexOfItem, 1);
    res.send({ status: 1 });
    return;
  }

  res.send({ status: 0, error: "Item not found" });
});

module.exports = router;
