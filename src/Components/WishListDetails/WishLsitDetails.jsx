import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const WishLsitDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    console.log(id)

    const singleDetails = details.find(iteam=> iteam._id === id)
    const {title, imgUrl,short_desc, long_desc} = singleDetails;
  return (
    <div>
          <div>
      <img className='w-full' src={imgUrl} alt="blogs" />
      <h2 className='text-3xl py-4 font-bold'>{title}</h2>
      <p className='pb-3'>short_desc: {short_desc}</p>
      <p>long_desc: {long_desc} </p>
    </div>
    </div>
  )
}

export default WishLsitDetails
