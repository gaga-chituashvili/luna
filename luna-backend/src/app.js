const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const port = process.env.PORT || 3000;

const authRouter = require("./routes/auth-route.js");
const lunaRouter = require("./routes/luna-route.js");

const { sequelize } = require("./utils/db");

require("./models/user-schema");
require("./models/coffee-schema");

const swaggerUI = require("swagger-ui-express");
const { generateOpenApiDocs } = require("./utils/swaggerConfig");
const swaggerDoc = generateOpenApiDocs();

app.use(express.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use("/auth", authRouter);
app.use("/v1", lunaRouter);

sequelize
  .sync({ force: false })
  .then(() => console.log("Database synchronized"))
  .catch((error) => console.log(`DB Error: ${error.message}`));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
