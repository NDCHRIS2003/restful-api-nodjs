let express = require("express");
let app = express();
let routerPerson = require("./route/person");

app.use(routerPerson);
app.use(express.static("public"));

const port = process.env.PORT || 3000;

//app.listen(PORT, () => Console.log(`Port started on ${PORT}`));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server started on port ${port}`);
});
