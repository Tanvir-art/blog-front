import { useQuery } from '@tanstack/react-query'
import React from 'react'

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
    console.log(data)
  return (
    <div>
      <h2>Hello {data.length}</h2>
    </div>
  )
}

export default All
