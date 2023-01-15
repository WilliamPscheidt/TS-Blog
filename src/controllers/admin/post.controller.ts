import Database from '../../services/database'
import postSchema from '../../models/Posts.model'
import PostBody from './post.interface'
import {Request, Response} from 'express'

export default class Post {

    static create(req: Request<any, any, PostBody>, res: Response) {
        const database = new Database()

        const {title, description, text, author} = req.body
        
        database.insert(postSchema, {
            title: title,
            description: description,
            text: text,
            author: author
        })

        res.send({"success": title})
    }s
}