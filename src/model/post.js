import { action } from 'easy-peasy'

export default {
    posts: [],
    add: action((state, payload) => {
        state.posts.push(payload)
    })
}