import { Schema, model } from 'mongoose';

interface IPosts {
    title: string;
    description: string;
    text: string;
    author: string;
}

const postSchema = new Schema<IPosts>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    text: {type: String, required: true},
    author: {type: String, required: true}
})

export default model<IPosts>('Posts', postSchema)