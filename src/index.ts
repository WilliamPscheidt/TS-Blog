import HTTPServer from './services/server'

const testeMiddle = (req, res, next) => {

    console.log("Middleware")

    next()
}

class Router extends HTTPServer {

    prefix: string
    constructor() {
        super()
        this.startServer()
    }
    
    async userRoutes() {
        this.server.get('/users/login', (req, res) => {res.send({"user_route": "login"})})
        this.server.get('/users/register', (req, res) => {res.send({"user_route": "register"})})
    }

    async adminRoutes() {
        this.server.use('/admin', testeMiddle)
        this.server.get('/admin/login', (req, res) => {res.send({"admin_route": "login"})})
        this.server.get('/admin/register', (req, res) => {res.send({"admin_route": "register"})})
    }
}

const router = new Router()
router.userRoutes()
router.adminRoutes()