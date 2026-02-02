const express = require("express");
const lunaRouter = require("./routes/luna-route");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/v1", lunaRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:3000`);
});
