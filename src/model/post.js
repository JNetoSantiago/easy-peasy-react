const post = {
    posts: [],
    add: action((state, payload) => {
        state.posts.push(payload)
    })
}