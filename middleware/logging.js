const fs = require("fs");

module.exports.addToLog = (req, res, next) => {
  const log = `${new Date().toString()} | ${JSON.stringify(req.headers)} \r\n`;

  fs.appendFile("log.txt", log, (error) => {
    // console.log(error);
  });

  next();
};
