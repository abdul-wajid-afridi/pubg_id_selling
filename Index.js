const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models");
const port = 5000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/profile", express.static("upload/images"));

app.use("/pubg/", require("./Routes/IdDetailsRoute"));
db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`port runs on ${port}`));
});
