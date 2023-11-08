import { useQuery } from '@tanstack/react-query'
import React from 'react'
import SingleBlog from '../../Components/SingleBlog/SingleBlog';

const All = () => {
    const  {isPending, data} = useQuery({
        queryKey: ['blogs'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/blogs');
            return res.json();
        }
    })
    if(isPending){
        return <span className='loading loading-spinner text-primary'>Loading</span>
    }
  return (
    <div>
      <div className='grid grid-cols-4 gap-6 mx-10 my-10'>
      {
        data.map(blog=> <SingleBlog key={blog._id} blog={blog}/>)
      }
      </div>
    </div>
  )
}

export default All
