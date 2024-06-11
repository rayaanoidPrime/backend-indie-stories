import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { Schema, Validator } from "@cfworker/json-schema";
import { Data } from "./types";

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key];
};

const app = new Hono<{ Bindings: Bindings }>();

const querySchema: Schema = {
  type: "object",
  properties: {
    prompt: { type: "string" },
  },
  required: ["prompt"],
  additionalProperties: false,
};

const validator = new Validator(querySchema);

app.get("/", (c) => {
  const response = "Hello from Hono!";

  return new Response(response, {
    headers: {
      "content-type": "text/plain",
    },
  });
});

app.get(
  "/mhbrt",
  zValidator("query", z.object({ prompt: z.string() })),
  async (c) => {
    const { prompt } = c.req.valid("query");

    const embeddings = await c.env.AI.run("@cf/baai/bge-base-en-v1.5", {
      text: prompt,
    });

    const vector = embeddings.data[0];

    const requestBody = {
      namespace: c.env.PINECONE_INDEX_NAMESPACE,
      vector: vector,
      topK: 3,
      includeMetadata: true,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Api-Key": c.env.PINECONE_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(
      `${c.env.PINECONE_INDEX_HOST}/query`,
      requestOptions
    );

    const data = (await response.json()) as Data;

    const textValues = extractTextValues(data);

    return new Response(JSON.stringify(textValues), {
      headers: {
        "content-type": "application/json",
      },
    });
  }
);

function extractTextValues(data: Data): string[] {
  return data.matches.map((match) => match.metadata.text);
}

export default app;
