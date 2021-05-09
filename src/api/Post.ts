export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export const getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}