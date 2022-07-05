import React, { useState, useEffect } from 'react';
import Post from './Post/Post';
import axios from 'axios';
import { URL } from '../../Config/ApiConfig';
import { useForm } from '../../Contexts/FormContext';

const Posts = () => {

  const [blogs, setBlogs ] = useState([]);
  const { state } = useForm();
  const { formSubmitted } = state
  useEffect(()=>{
    (async()=>{
      const res = await axios.get(URL);
      setBlogs(res.data);
    })()
  }, [formSubmitted]);
  console.log(blogs);
  return (
    <div>
        { blogs.length === 0 ? <p>No Blogs to show</p> : blogs.map((blog)=>{return <Post key={blog._id} content={blog} />})}
    </div>
  )
}

export default Posts