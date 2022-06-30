import { useParams } from 'react-router-dom'
import {useEffect, useState} from "react"
import axios from "axios"

export const BlogPost = function () {
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then(({data}) => {
        setPost(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <main className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  )
}
