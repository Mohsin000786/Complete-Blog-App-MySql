import React, { useState } from 'react'
import './CreatePost.scss'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import axios from 'axios';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

const CreatePost = () => {
  const state = useLocation().state;
  // console.log(state)
  const [name, setName] = useState(state ? state.name : '');
  const [value, setValue] = useState(state ? state.description :'');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state ? state.cat : '');


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  }

  const uploadImage = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('file', file);
      const res = await axios.post('http://localhost:8800/upload/postImage', formdata)
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ImgUrl = await uploadImage(e)
    const data = {
      name: name,
      description: getText(value),
      image: file ? ImgUrl : "",
      cat: category,
      date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    }

    try {
      state ? await axios.put(`/posts/${state.id}`, data) : await axios.post("/posts", data)
    } catch (error) {
      console.log(error)
    }
  }
  //console.log(value)
  return (
    <div className="create">
      <div className="contents">
        <input type="text" placeholder='Title' value={name} onChange={(e) => setName(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item1">
          <h2 className='link'>Publish</h2>
          <div className='status'>
            <b>Status : </b> 
            <span>Draft</span>
          </div>
          <div className='status'>
            <b> Visibility :</b> 
            <span>Public</span>
          </div>

          <input style={{ "display": "none" }} type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleSubmit}>{state ? "Update" : "Create"}</button>
          </div>
        </div>

        <div className="item2">
          <h2 className='link'>Category</h2>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "art"} id="art" value="art" onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="art">Art</label>
          </div>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "science" } id="science" value="science"  onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="science">Science</label>
          </div>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "technology"} id="technology" value="technology" onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "cinema"} id="cinema" value="cinema" onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "Design"} id="Design" value="Design" onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="Design">Design</label>
          </div>
          <div className="inputContainer">
            <input type="radio" name="category" checked={state?.cat === "food"} id="food" value="food" onChange={(e) => setCategory(e.target.value)} />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost