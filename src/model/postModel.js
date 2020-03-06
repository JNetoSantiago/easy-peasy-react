import { action } from 'easy-peasy'

export default {
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload
    }),
    addPost: action((state, payload) => {
        state.posts.push(payload)
    })
}