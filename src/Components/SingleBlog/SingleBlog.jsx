import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SingleBlog = ({blog}) => {
  const {_id, title, imgUrl, catagory, short_desc, long_desc, dataAndTime} = blog;
  const {user} = useContext(AuthContext);
  const email = user?.email


  const handleWishList =()=>{
      fetch('http://localhost:5000/wishlist', {
        method: "POST",
        headers: {
          'content-type': 'application/json' 
        },
        body: JSON.stringify({title, imgUrl, catagory, short_desc, email, long_desc, dataAndTime})

      })
      .then(res=> res.json())
      .then(data=> console.log(data))
  }

  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
  <figure><img src={imgUrl} alt="blog" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{catagory}</div>
    </h2>
    <p>{`${short_desc.slice(0, 100)}...`}</p>
    <div className="card-actions justify-between">
        <Link to={`/blog/${_id}`}>
        
      <button  className="btn btn-outline">Details</button> 
        </Link>
      <button onClick={handleWishList} className="btn btn-outline">Wishlist</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleBlog
