import { Elysia } from 'elysia'

const rawController = new Elysia()
  .ws('/raw', {
    open(ws) {
      console.log('WebSocket connection opened')
      ws.send('Hello WebSocket')
    },
    close(ws, code, message) {
      console.log(`WebSocket connection closed: ${code} - ${message}`)
    }
  })

export { rawController }
