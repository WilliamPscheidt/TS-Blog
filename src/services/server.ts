import express from 'express'

export default class HTTPServer {
  public server: express.Application;

  constructor() {
    this.server = express()
    this.middlewares()
  }

  async middlewares() {
    this.server.use(express.json());
  }

  async startServer() {
    this.server.listen(3000, () => {console.log("Server listening on port 3000")})
  }

  async use(path: string, handler: any) {
    this.server.use(path, handler)
  }

  async get(path: string, handler: any) {
    this.server.get(path, handler)
  }

  async post(path: string, handler: any) {
    this.server.post(path, handler)
  }
}