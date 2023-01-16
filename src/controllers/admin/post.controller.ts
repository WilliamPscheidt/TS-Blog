import Database from '../../services/database'

import postSchema from '../../models/Posts.model'

import PostBody from './post.interface'
import PostUpdateBody from './post.interface'
import PostDeleteBody from './post.interface'


import {Request, Response} from 'express'

export default class Post {

    static async create(req: Request<any, any, PostBody>, res: Response) {
        const database = new Database()

        const {title, description, text, author} = req.body
        
        await database.insert(postSchema, {
            title: title,
            description: description,
            text: text,
            author: author
        })

        res.send({"success": title})
    }

    static async update(req: Request<any, any, PostUpdateBody>, res: Response) {
        const database = new Database()

        const {oldTitle, title, description, text, author} = req.body
        
        await database.update(postSchema, {title: oldTitle}, {
            title: title,
            description: description,
            text: text,
            author: author
        })

        res.send({"Ok": "update"})
    }

    static async delete(req: Request<any, any, PostBody>, res: Response) {
        const database = new Database()

        const {title} = req.body

        await database.delete(postSchema, {title: title})

        res.send({"Ok": "delete"})
    }
}