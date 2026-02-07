const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const lunaRouter = require("./routes/luna-route");
const authRouter = require("./routes/auth-route");
const { sequelize } = require("./utils/db");

const { UserSchema } = require("./models/user-schema");
const { TodoSchema } = require("./models/luna-schema");

const swaggerUI = require("swagger-ui-express");
const { generateOpenApiDocs } = require("./utils/swaggerConfig");
const swaggerDoc = generateOpenApiDocs();

app.use(bodyParser.json());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use("/v1", lunaRouter);
app.use("/auth", authRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized - Tables created!");
  })
  .catch((error) => {
    console.log(`DB Error: ${error.message}`);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
