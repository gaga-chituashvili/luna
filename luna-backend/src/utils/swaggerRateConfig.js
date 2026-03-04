const { z } = require("zod");
const {
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} = require("@asteasolutions/zod-to-openapi");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

extendZodWithOpenApi(z);

const registry = new OpenAPIRegistry();

/* ---------- SCHEMAS ---------- */

const rateSchema = z.object({
  id: z.number(),
  fullname: z.string(),
  position: z.string(),
  rate: z.number(),
  comment: z.string(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

const createRateSchema = z.object({
  fullname: z.string(),
  position: z.string(),
  rate: z.number(),
  comment: z.string(),
});

const createResponseSchema = z.object({
  success: z.boolean(),
  data: rateSchema,
});

const getAllResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(rateSchema),
});

/* ---------- POST CREATE ---------- */

registry.registerPath({
  method: "post",
  path: "/v1/rates",
  tags: ["Rate Management"],
  summary: "Create a new rate",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createRateSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Rate created successfully",
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
  path: "/v1/rates",
  tags: ["Rate Management"],
  summary: "Get all rates",
  responses: {
    200: {
      description: "List of all rates",
      content: {
        "application/json": {
          schema: getAllResponseSchema,
        },
      },
    },
  },
});

/* ---------- GENERATE DOC ---------- */

function generateOpenApiDocs() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Rate management app",
      version: "1.0.0",
      description: "API documentation for rate management",
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
