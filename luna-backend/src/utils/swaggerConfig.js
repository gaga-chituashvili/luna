const { z } = require("zod");
const {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} = require("@asteasolutions/zod-to-openapi");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env", quiet: true });

const { todoCreationSchema } = require("../services/luna.service");

const PORT = process.env.PORT || 3000;

extendZodWithOpenApi(z);

const todoCreation201 = z
  .object({
    success: z.boolean(),
    data: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        complated: z.boolean(),
        priority: z.string(),
        dueDate: z.date(),
        createdAt: z.date(),
      }),
    ),
  })
  .openapi("CreateCoffeeProducts");

const registry = new OpenAPIRegistry();

registry.registerPath({
  method: "post",
  path: "/v1/product/create",
  tags: ["Product Management"],
  summary: "Create a new product",
  request: {
    body: {
      description: "Create a new product",
      content: {
        "application/json": {
          schema: todoCreationSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Product created successfully",
      content: {
        "application/json": {
          schema: todoCreation201,
        },
      },
    },
  },
});

function generateOpenApiDocs() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Coffee management app",
      version: "1.0.0",
      description: "API documentation for coffee app",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  });
}

module.exports = {
  registry,
  generateOpenApiDocs,
};
