"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./services/server"));
const testeMiddle = (req, res, next) => {
    console.log("Middleware");
    next();
};
class Router extends server_1.default {
    constructor() {
        super();
        this.startServer();
    }
    userRoutes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server.get('/users/login', (req, res) => { res.send({ "user_route": "login" }); });
            this.server.get('/users/register', (req, res) => { res.send({ "user_route": "register" }); });
        });
    }
    adminRoutes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.server.use('/admin', testeMiddle);
            this.server.get('/admin/login', (req, res) => { res.send({ "admin_route": "login" }); });
            this.server.get('/admin/register', (req, res) => { res.send({ "admin_route": "register" }); });
        });
    }
}
const router = new Router();
router.userRoutes();
router.adminRoutes();
//# sourceMappingURL=index.js.map