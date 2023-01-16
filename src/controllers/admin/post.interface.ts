export default interface PostBody {
    title: string,
    description: string,
    text: string,
    author: string
}

export default interface PostUpdateBody {
    oldTitle: string,
    title: string,
    description: string,
    text: string,
    author: string
}

export default interface PostDeleteBody {
    oldTitle: string,
    title: string,
    description: string,
    text: string,
    author: string
}