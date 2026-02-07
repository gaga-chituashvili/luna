const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const lunaRouter = require("./routes/luna-route");
const authRouter = require("./routes/auth-route");
const sequelize = require("./utils/db");

const swaggerUI = require("swagger-ui-express");
const { generateOpenApiDocs } = require("./utils/swaggerConfig");
const swaggerDoc = generateOpenApiDocs();

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Routes
app.use("/v1", lunaRouter);
app.use("/auth", authRouter);

// Database
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.log(`Could not connect to DB: ${error}`);
  });

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
