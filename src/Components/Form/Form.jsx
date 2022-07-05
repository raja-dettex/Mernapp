import React, {useState} from 'react';
import axios from 'axios';
import { URL } from './../../Config/ApiConfig';
import { useForm } from './../../Contexts/FormContext';

const Form = () => {


  const [title, setTitle] = useState("");
  const [ message, setMessage] = useState("");
  const [ tags, setTags] = useState([]);
  const {state, formDispatch} = useForm();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const postData = { title, message, tags}
    try{
      const res = await axios.post(URL, postData);
      console.log(res);
      formDispatch({
        type: "SUBMIT",
        payload: true
      })
    } catch(err){
      console.log(err);
      formDispatch({
        type: "SUBMIT",
        payload: false
      })
    }
    
    

  }
  
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
  <div className="mb-3">
    <label htmlFor="titleInput" className="form-label">Add a title</label>
    <input type="text" className="form-control" id="titleInput" aria-describedby="emailHelp" onChange={(e)=>{setTitle(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="messageInput" className="form-label">Your message</label>
    <input type="textarea" className="form-control" id="messageInput" onChange={(e)=>{setMessage(e.target.value)}} />
  </div>
  <div className="mb-3">
    <label htmlFor="tagsInput" className="form-label">Add tags</label>
    <input type="text" className="form-control" id="tagsInput" onChange={(e)=>{setTags(e.target.value.split(","))}}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Form