import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.scss'

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get('/posts')
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getPosts();
  }, []);


  return (
    <div className="home">
      <div className="posts">
        {
          posts.map(post => (
            <div className="post" key={post.id}>
              <div className="postImg">
                <Link to={`/posts/${post.id}`}>
                  <img src={`../uploads/${post.image}`} alt={post.title} />
                </Link>
              </div>
              <div className="contents">
                <Link to={`/posts/${post.id}`} className="link">
                  <h1>{post.name}</h1>
                </Link>
                <p>{post.description}</p>

                <Link to={`/posts/${post.id}`}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home