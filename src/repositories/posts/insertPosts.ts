import Database from '../../services/database'
import postSchema from '../../models/Posts.model'

export default class InsertPosts {
    static async execute(title: string, description: string, text: string, author: string) {
        const database = new Database()
        
        await database.insert(postSchema, {
            title: title,
            description: description,
            text: text,
            author: author
        })
    }
}
