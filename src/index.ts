import HTTPServer from './adapters/server'

import Post from './controllers/admin/post.controller'

class Router extends HTTPServer {

    constructor() {
        super()
        this.startServer()
    }
    
    async userRoutes() {
        this.server.get('/user/post', Post.get)
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