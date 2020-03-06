
function postService(api) {
  const getAllPosts = async () => await api.get(
    '/posts',
    {},
    {
      headers: {
        Authorization: ''
      }
    })

  return {
    getAllPosts
  }
}

export default postService