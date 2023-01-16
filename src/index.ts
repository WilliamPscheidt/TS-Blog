import HTTPServer from './services/server'

import Post from './controllers/admin/post.controller'

class Router extends HTTPServer {

    prefix: string
    constructor() {
        super()
        this.startServer()
    }
    
    async userRoutes() {
        this.server.get('/get_posts', (req, res) => {res.send({"user_route": "login"})})
    }

    async adminRoutes() {
        this.server.post('/admin/post', Post.create)
        this.server.put('/admin/post', Post.update)
        this.server.delete('/admin/post', Post.delete)
    }
}

const router = new Router()
router.userRoutes()
router.adminRoutes()