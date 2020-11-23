let CustomerModel = require("../model/customer-model");
let express = require("express");
let router = express.Router();

router.post("/customer", (req, res) => {
  if (!req.body) {
    return res.status(400).send("The request body doesnt exist");
  }
  let model = new CustomerModel(req.body);
  model
    .save()
    .then((doc) => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/customer", (req, res) => {
  if (!req.email) {
    return res.status(400).send("Missing url parameter: Email");
  }
  CustomerModel.findOne({
    email: req.query.email,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/customer", (req, res) => {
  if (!req.email) {
    return res.status(400).send("Missing url parameter: Email");
  }
  CustomerModel.findOneAndUpdate(
    {
      email: req.query.email,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/customer", (req, res) => {
  if (!req.email) {
    return res.status(400).send("Missing url parameter: Email");
  }
  CustomerModel.findOneAndRemove({
    email: req.query.email,
  })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
