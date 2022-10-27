const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // console.log(req.simpsons);
  // let { count, search } = req.query;
  // count = Number(count);

  // const _simpsons = [...req.simpsons];

  // //if a search filter the results
  // let filtered = _simpsons;
  // if (search) {
  //   filtered = filtered.filter((item) => {
  //     return item.character.toLowerCase().includes(search);
  //   });
  // }

  // //check if a count and chop the array down
  // if (
  //   count &&
  //   count > 0 &&
  //   typeof count === "number" &&
  //   count <= _simpsons.length
  // ) {
  //   _simpsons.length = count;
  // }

  res.send(req.currentUser);
});

module.exports = router;
