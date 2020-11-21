let express = require("express");
let router = express.Router();

// this is to send a query property of the request object
// http://localhost:3000/person?
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`You requested a person ${req.query.name}`);
  } else {
    res.send("You requested a person");
  }
});

module.exports = router;
