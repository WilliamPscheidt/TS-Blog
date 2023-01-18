import Database from '../../adapters/database'
import postSchema from '../../models/Posts.model'

export default class UpdatePosts {
    static async execute(oldTitle: string, title: string, description: string, text: string, author: string) {
        const database = new Database()
        
        await database.update(postSchema, {title: oldTitle}, {
            title: title,
            description: description,
            text: text,
            author: author
        })
    }
}
