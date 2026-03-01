const { z } = require("zod");
const {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} = require("@asteasolutions/zod-to-openapi");

require("dotenv").config({ path: "./.env", quiet: true });

const PORT = process.env.PORT || 3000;

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

/* ---------- SCHEMAS ---------- */

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

/* ---------- POST CREATE ---------- */

registry.registerPath({
  method: "post",
  path: "/v1/products",
  tags: ["Product Management"],
  summary: "Create a new product",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "multipart/form-data": {
          schema: z.object({
            name: z.string(),
            price: z.number(),
            tag: z.string(),
            img: z.any(), // file upload
          }),
        },
      },
    },
  },
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

/* ---------- PATCH UPDATE ---------- */

registry.registerPath({
  method: "patch",
  path: "/v1/products/{id}",
  tags: ["Product Management"],
  summary: "Update product (partial update)",
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "multipart/form-data": {
          schema: z.object({
            name: z.string().optional(),
            price: z.number().optional(),
            tag: z.string().optional(),
            img: z.any().optional(), 
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Product updated successfully",
      content: {
        "application/json": {
          schema: createResponseSchema,
        },
      },
    },
    404: {
      description: "Product not found",
    },
  },
});

/* ---------- GENERATE DOC ---------- */

function generateOpenApiDocs() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Coffee management app",
      version: "1.0.0",
      description: "API documentation for coffee app",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
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
