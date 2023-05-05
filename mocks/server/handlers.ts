import { rest } from "msw";

export const handlers = [
  rest.get("/task/status", async (_req, res, ctx) => {
    return await res(
      ctx.json([
        {
          statusCode: 200,
        },
      ])
    );
  }),
];
