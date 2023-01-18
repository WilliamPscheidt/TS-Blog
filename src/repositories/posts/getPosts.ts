import Database from '../../adapters/database'
import postSchema from '../../models/Posts.model'

export default class GetPosts {
    static async execute(title: string) {
        const database = new Database()
        return await database.find(postSchema, {title: title})
    }
}
