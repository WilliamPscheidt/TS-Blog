import mongoose from "mongoose";
import dbConnection from "../configurations/configurations"

export default class Database {

    db: mongoose.Connection;
    constructor() {
        mongoose.connect(dbConnection)
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error'));
    }

    async find(model, query:Object) {
        return await model.find(query)
    }

    async insert(model, data: { title: any; description: string; text: string; author: string; }) {
        const newDocument = new model(data)
        await newDocument.save();
    }

    async delete(model, query: Object) {
        return await model.deleteMany(query)
    }

    async update(model, query:Object, update:Object) {
        return await model.updateMany(query, update)
    }
}