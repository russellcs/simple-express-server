const express = require("express"); //the import
const app = express(); //create an instance
const { simpsons } = require("./data/simpsons");

app.post("/sayhi", (req, res) => {
  res.send("Hi from the back end!");
});

app.get("/quotes", (req, res) => {
  let { count, search } = req.query;
  count = Number(count);

  const _simpsons = [...simpsons];

  _simpsons.forEach((element, index) => {
    element.id = index;
    element.characterDirection = element.characterDirection.toLowerCase();
  });

  //if a search filter the results
  let filtered = _simpsons;
  if (search) {
    filtered = filtered.filter((item) => {
      return item.character.toLowerCase().includes(search);
    });
  }

  //check if a count and chop the array down
  if (count && count > 0 && typeof count === "number") {
    _simpsons.length = count;
  }

  res.send(filtered);
});

const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
