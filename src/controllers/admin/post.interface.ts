export default interface GetBody {
    title: string,
}

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
    title: string
}