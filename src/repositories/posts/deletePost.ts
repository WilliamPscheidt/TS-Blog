import Database from '../../adapters/database'
import postSchema from '../../models/Posts.model'

export default class DeletePost {
    static async execute(title: string) {
        const database = new Database()
        await database.delete(postSchema, {title: title})
    }
}
