const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./.env", quiet: true });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const authRouter = require("./routes/auth-route.js");
const lunaRouter = require("./routes/luna-route.js");
const rateRouter = require("./routes/rate-route.js");

const { sequelize } = require("./utils/db");

require("./models/user-schema");
require("./models/coffee-schema");

const swaggerUI = require("swagger-ui-express");
const { generateOpenApiDocs: generateProductDocs } = require("./utils/swaggerProductConfig.js");
const { generateOpenApiDocs: generateRateDocs } = require("./utils/swaggerRateConfig.js");

const productDoc = generateProductDocs();
const rateDoc = generateRateDocs();

const combinedDoc = {
  ...productDoc,
  paths: {
    ...productDoc.paths,
    ...rateDoc.paths,
  },
  components: {
    schemas: {
      ...productDoc.components?.schemas,
      ...rateDoc.components?.schemas,
    },
  },
};


app.use(express.json());

app.use("/docs", swaggerUI.serve, swaggerUI.setup(combinedDoc));

app.use("/uploads", express.static("uploads"));

app.use("/auth", authRouter);
app.use("/v1", lunaRouter);
app.use("/v1", rateRouter);

sequelize
  .sync({ force: false })
  .then(() => console.log("Database synchronized"))
  .catch((error) => console.log(`DB Error: ${error.message}`));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});