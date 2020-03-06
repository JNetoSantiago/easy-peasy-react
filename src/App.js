import React, { useContext, useEffect } from 'react';

import ApiContext from '~/components/behavior/ApiContext'

import postService from '~/services/postService'
import { useStoreActions, useStoreState } from 'easy-peasy';

function App() {

  const { api } = useContext(ApiContext)
  const posts = useStoreState(state => state.post.posts)
  const setPosts = useStoreActions(actions => actions.post.setPosts)

  useEffect(() => {
    const data = postService(api).getAllPosts()
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{ post.title }</li>)}
      </ul>
    </div>
  );
}

export default App;
