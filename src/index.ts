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
        this.server.post('/admin/create_post', Post.create)
    }
}

const router = new Router()
router.userRoutes()
router.adminRoutes()