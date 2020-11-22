let express = require("express");
let router = express.Router();

// this is to send a query property of the request object
// http://localhost:3000/person?name=chris&age=30
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`You requested a person ${req.query.name}`);
  } else {
    res.send("You requested a person");
  }
});

router.get("/person/:name", (req, res) => {
  res.send(`You requested a person ${req.params.name}`);
});

router.get("/error", (req, res) => {
  throw new Error("This is a new Error");
});

module.exports = router;
