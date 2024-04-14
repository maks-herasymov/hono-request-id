import type { MiddlewareHandler, Context, Next } from "hono"

import hyperid from "hyperid"

export const requestId = (
  generator: () => string = hyperid({ fixedLength: true, urlSafe: true }),
): MiddlewareHandler => {
  return async (c: Context, next: Next) => {
    c.req.requestId = generator()

    await next()
  }
}

declare module "hono" {
  export interface HonoRequest {
    requestId: string
  }
}
