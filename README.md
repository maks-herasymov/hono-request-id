# Request ID middleware for Hono

This middleware adds a unique `requestId` to each [Hono](https://github.com/honojs/hono) request object. It uses [hyperid](https://github.com/mcollina/hyperid) to generate highly performant, sequential, and unique IDs by default.

## Installation

```plain
npm i hono hono-request-id
```

## How to Use

Default:
```ts
import { Hono } from "hono"
import { requestId } from "hono-request-id"

const app = new Hono()

app.use('*', requestId())

export default app
```

Custom:
```ts
import { Hono } from "hono"
import { requestId } from "hono-request-id"
import crypto from "node:crypto"

const app = new Hono()

app.use('*', requestId(crypto.randomUUID))

export default app
```

With [Pino logger middleware](https://github.com/maks-herasymov/hono-pino-logger):
```ts
import { Hono } from "hono"
import { requestId } from "hono-request-id"
import { pinoLogger } from "hono-pino-logger"

const app = new Hono()

app.use('*', requestId())
app.use('*', pinoLogger())

export default app
```

## Authors

- Maksym Herasymov - <https://github.com/maks-herasymov>

## License

MIT
