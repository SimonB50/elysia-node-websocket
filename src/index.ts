import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'
import {rawController} from "./a.js";
import {adapterController} from "./b.js";

const app = new Elysia({ adapter: node() })
  .get('/', () => 'Hello Elysia')
  .use(rawController)
  .use(adapterController)
  .listen(3000, ({ hostname, port }) => {
    console.log(
      `🦊 Elysia is running at ${hostname}:${port}`
    )
  })
