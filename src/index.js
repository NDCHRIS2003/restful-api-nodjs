let express = require("express");
let app = express();
let routerPerson = require("./route/person");
let customerRouter = require("./route/customer");
let path = require;
let bodyParse = require("body-parser");

app.use(bodyParse.json());
app.use((req, res, next) => {
  Console.log(`${new Date().toString()}=> ${req.originalUrl}`);

  next();
});

app.use(customerRouter);
app.use(routerPerson);
app.use(express.static("public"));

// handler for 404
app.use((req, res, next) => {
  res.Status(404).send("This page does not exist");
});
// handler for error 500
app.use((err, req, res, next) => {
  Console.Error(err.stack);
  res.sendfile(path.join(__dirname, "../public/500.html"));
});
const port = process.env.PORT || 3000;

//app.listen(PORT, () => Console.log(`Port started on ${PORT}`));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server started on port ${port}`);
});
