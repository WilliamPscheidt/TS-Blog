import PostBody from './post.interface'
import PostUpdateBody from './post.interface'
import PostDeleteBody from './post.interface'
import GetBody from './post.interface'

import GetPosts from '../../repositories/posts/getPosts'
import InsertPosts from '../../repositories/posts/insertPosts'
import UpdatePosts from '../../repositories/posts/updatePosts'

import {Request, Response} from 'express'
import DeletePost from '../../repositories/posts/deletePost'


export default class Post {

    static async get(req: Request<any, any, GetBody>, res: Response) {
        const {title} = req.body

        const posts = await GetPosts.execute(title)

        res.send({"success": posts});
    }

    static async create(req: Request<any, any, PostBody>, res: Response) {
        const {title, description, text, author} = req.body

        await InsertPosts.execute(title, description, text, author)

        res.send({"success": "post inserted"})
    }

    static async update(req: Request<any, any, PostUpdateBody>, res: Response) {
        const {oldTitle, title, description, text, author} = req.body

        await UpdatePosts.execute(oldTitle, title, description, text, author)

        res.send({"Ok": "updated"})
    }

    static async delete(req: Request<any, any, PostDeleteBody>, res: Response) {
        const {title} = req.body

        await DeletePost.execute(title)

        res.send({"Ok": "post deleted"})
    }
}