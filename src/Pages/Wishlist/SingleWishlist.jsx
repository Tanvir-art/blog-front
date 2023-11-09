import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleWishlist = ({ iteam }) => {
  const { _id, title, imgUrl, catagory, short_desc } = iteam;
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    fetch(`https://b8a11-server-side-tanvir-art.vercel.app/wishlist/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("deleted data");
          setIsDeleted(true); // Set a flag to indicate the item was deleted
        }
      });
  };

  if (isDeleted) {
    return null; // Return null to remove the item from the UI
  }

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} alt="blog" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{catagory}</div>
          </h2>
          <p>{`${short_desc.slice(0, 100)}...`}</p>
          <div className="card-actions justify-between">
            <Link to={`/wishlist/${_id}`}>
              <button className="btn btn-outline">Details</button>
            </Link>
            <button onClick={handleDelete} className="btn btn-outline">
              Remove Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWishlist;
