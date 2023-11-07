import React from 'react'

const SingleBlog = ({blog}) => {
    const {title, imgUrl, catagory, short_desc} = blog
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
      <button className="btn btn-outline">Details</button> 
      <button className="btn btn-outline">Wishlist</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SingleBlog
