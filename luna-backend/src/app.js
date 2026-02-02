const express = require("express");
const lunaRouter = require("./routes/luna-route");
const sequelize = require("../utils/db"); 

const app = express();
const port = 3000;

app.use(express.json());
app.use("/v1", lunaRouter);

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.log(`Could not connect to DB: ${error}`);
  });

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:3000`);
});
