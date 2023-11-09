import React, { useContext } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Details = () => {
  const {user} = useContext(AuthContext)
  const details = useLoaderData();
  const {id} = useParams();
  console.log(id)

  const singleDetails = details.find(iteam=> iteam._id === id)
  const {_id, title, imgUrl,short_desc, email, long_desc} = singleDetails;

  return (
    <div>
      <img className='w-full' src={imgUrl} alt="blogs" />
      <h2 className='text-3xl py-4 font-bold'>{title}</h2>
      <p className='pb-3'>short_desc: {short_desc}</p>
      <p>long_desc: {long_desc} </p>

    {user?.email ===  email ? 
          <Link >
          <button className='btn btn-primary my-6'>Update</button>
        </Link>
        :
        ""
  }

    </div>
  )
}

export default Details
