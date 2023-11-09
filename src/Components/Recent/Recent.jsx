
import React, { useEffect, useState } from 'react';
import RecentDatas from './RecentDatas';

const Recent = () => {
    const [recentData, setRecentData] = useState([]);

    useEffect(()=>{
        fetch('https://b8a11-server-side-tanvir-art.vercel.app/recent-blogs')
        .then (res=> res.json())
        .then(data=> setRecentData(data))
    })
      
  return (
    <div>
      <h1 className='text-4xl py-6 font-bold text-center'>Recent Blog</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mb-10'>
        {
            recentData.map(iteam=> <RecentDatas key={iteam._id} iteam={iteam}/>)
        }
      </div>
    </div>
  )
}

export default Recent
