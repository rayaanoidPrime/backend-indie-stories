import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key];
};

const app = new Hono<{ Bindings: Bindings }>();

app.get(
  "/",
  zValidator("query", z.object({ prompt: z.string() })),
  async (c) => {
    const { prompt } = c.req.valid("query");
    const inputs = {
      prompt,
    };

    const response = await c.env.AI.run(
      "@cf/bytedance/stable-diffusion-xl-lightning",
      inputs
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
);

export default app;
