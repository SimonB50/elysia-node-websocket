import { Elysia } from 'elysia'
import {node} from "@elysiajs/node";

const adapterController = new Elysia({
  adapter: node()
})
  .ws('/adapter', {
    open(ws) {
      console.log('WebSocket connection opened')
      ws.send('Hello WebSocket')
    },
    close(ws, code, message) {
      console.log(`WebSocket connection closed: ${code} - ${message}`)
    }
  })

export { adapterController }
