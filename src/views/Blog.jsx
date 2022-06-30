import axios from 'axios'
import {useEffect, useState} from "react"
import './css/blog-page.scss'
import {Link} from "react-router-dom"

export const Blog = function () {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  useEffect(() => {
    // aici fac req catre server
    axios.get('/posts') // http://localhost:3301/posts
      .then(({data}) => {
        setPosts(data)
      })
      .catch(err => {
        console.log(`there was an error`)
      })
  }, [])

  function handleNewPost (ev) {
    ev.preventDefault()
    axios.post('/posts', post)
      .then(({data}) => {
        setPosts([...posts, data])
        setPost({
          title: '',
          body: ''
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  function handleFieldUpdate (value, fieldName) {
    const postUpdate = {...post}
    postUpdate[fieldName] = value.replace(/[^a-zA-Z ]+/g, '')
    setPost(postUpdate)
  }

  return (
    <main className='blog-page'>
      <h1>This is my blog page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={(ev) => handleNewPost(ev)}>
        <label htmlFor="title">
          title: <br/>
          <input onChange={(ev) => handleFieldUpdate(ev.target.value, 'title')}
                 value={post.title}
                 id='title' type="text" placeholder='title'/>
        </label>
        <br/>
        <label htmlFor="body">
          body:
          <br/>
          <textarea onChange={(ev) => handleFieldUpdate(ev.target.value, 'body')}
                    value={post.body}
                    id="body" placeholder='body'></textarea>
        </label>
        <br/>
        <button>SAVE</button>
      </form>
    </main>
  )
}
