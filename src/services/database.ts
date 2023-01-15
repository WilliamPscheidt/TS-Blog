import mongoose from "mongoose";
import dbConnection from "../../configurations"

export default class Database {

    db: mongoose.Connection;
    constructor() {
        mongoose.connect(dbConnection)
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error'));
    }

    async find(model, query:String, projection:String, options:String) {
        return await model.find(query, projection, options)
    }

    async insert(model, data: { title: any; description: string; text: string; author: string; }) {
        const newDocument = new model(data)
        await newDocument.save();
    }

    async delete(model, query:String) {
        return await model.deleteMany(query)
    }

    async update(model, query:String, update:String) {
        return await model.updateMany(query, update)
    }
}