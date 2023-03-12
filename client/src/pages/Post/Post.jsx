import React, { useState, useEffect } from 'react'
import './Post.scss'
import Art1 from '../../img/art1.jpg';
import Edit from '../../img/edit.png';
import Delete from '../../img/delete.png';
import { Link, useLocation, useParams } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import axios from 'axios';
import moment from 'moment'

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [catPosts, setCatPosts] = useState([])
  
  useEffect(() => {
    const getPost = async () => {
      try {
        const postId = parseInt(params.id)
        const res = await axios.get(`http://localhost:8800/posts/${postId}`)
        setPost(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getCatPosts = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${post?.cat}`)
        setCatPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getPost();
    getCatPosts();
    
  }, [params.id, post.cat]);


const filterPost = catPosts.filter(x => x.id !== post.id)
  return (
    <div className="singlePost">
      <div className="singlePostcontents">
        <img src={`../uploads/${post.image}`} alt="" />
        <div className="user">
          <img src={Art1} alt="" />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>
          <div className="userTool">
            <Link to={`/create/?edit=1`} state={post}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>{post?.name}</h1>
        <p>{post?.description}</p>
      </div>
      <div className="menu">
        <Menu posts={filterPost} />
      </div>
    </div>
  )
}

export default Post