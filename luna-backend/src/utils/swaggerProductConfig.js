const { z } = require("zod");
const {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} = require("@asteasolutions/zod-to-openapi");

require("dotenv").config({ path: "./.env", quiet: true });

const PORT = process.env.PORT || 3000;

extendZodWithOpenApi(z);

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  img: z.string(),
  tag: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

const createResponseSchema = z.object({
  success: z.boolean(),
  data: productSchema,
});

const getAllResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(productSchema),
});

const registry = new OpenAPIRegistry();

/* ---------- POST CREATE ---------- */

registry.registerPath({
  method: "post",
  path: "/v1/products",
  tags: ["Product Management"],
  summary: "Create a new product",
  responses: {
    201: {
      description: "Product created successfully",
      content: {
        "application/json": {
          schema: createResponseSchema,
        },
      },
    },
  },
});

/* ---------- GET ALL ---------- */

registry.registerPath({
  method: "get",
  path: "/v1/products",
  tags: ["Product Management"],
  summary: "Get all products",
  responses: {
    200: {
      description: "List of all products",
      content: {
        "application/json": {
          schema: getAllResponseSchema,
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
