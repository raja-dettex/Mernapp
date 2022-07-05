import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({content}) => {
  const { title, message, tags} = content;
  return (
    <div className="card" style={cardStyle}>
  <img src="..." className="card-img-top" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{ title }</h5>
    <p className="card-text">{ message } </p>
  </div>
</div>
  ) 
}

const cardStyle = { 
  "width": "18rem"
}
export default Post