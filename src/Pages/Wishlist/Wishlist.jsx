import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react'
import { AuthContext } from '../../Components/Provider/AuthProvider';
import SingleWishlist from './SingleWishlist';

const Wishlist = () => {
  const {user} = useContext(AuthContext);
  const { isPending, data } = useQuery({
    queryKey: ['wishlists'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/wishlist?email=${user.email}`);
      return res.json();
    },
  });

  return (
    <div>
      <h2>wishlist</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 my-10'>
      {
        data?.map(iteam => <SingleWishlist key={iteam._id} iteam={iteam}/>)
      }
      </div>
    </div>
  )
}

export default Wishlist
