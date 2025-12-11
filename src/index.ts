import { Elysia } from 'elysia'
import { node } from '@elysiajs/node'
import {rawController} from "./a.js";
import {adapterController} from "./b.js";

const app = new Elysia({ adapter: node() })
  .get('/', () => 'Hello Elysia')
  .ws('/root', {
    open(ws) {
      console.log('WebSocket connection opened')
      ws.send('Hello WebSocket')
    },
    close(ws, code, message) {
      console.log(`WebSocket connection closed: ${code} - ${message}`)
    }
  })
  .use(rawController)
  .use(adapterController)
  .listen(3000, ({ hostname, port }) => {
    console.log(
      `🦊 Elysia is running at ${hostname}:${port}`
    )
  })
