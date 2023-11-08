import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
import SingleBlog from '../../Components/SingleBlog/SingleBlog';

const All = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isPending, data } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/blogs');
      return res.json();
    },
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    console.log('Selected Category:', selectedCategory);
    if (!isPending) {
      console.log('Data:', data);
      if (selectedCategory === 'all') {
        setCategoryData(data);
      } else {
        const foodData = data.filter(item => item.catagory === selectedCategory);
        setCategoryData(foodData);
      }
    }
  }, [selectedCategory, data, isPending]);

  if (isPending) {
    return <span className='loading loading-spinner text-primary'>Loading</span>;
  }

  console.log('Category Data:', categoryData);

  return (
    <div>
      <div className='flex justify-between py-3'>
        <select
          className='ml-10 input border-slate-300'
          name="categoryDrop"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
          <option value="healthy">Healthy</option>
        </select>

        <div className="form-control mr-10">
  <label className="input-group">
    <input type="text" placeholder="search by title...." className="input input-bordered" onChange={(event)=> setSearchTerm(event.target.value)}/>
    <button className='bg-[#333] text-white px-3'>Search</button>
  </label> 
</div>
      </div>
      <div className='grid grid-cols-4 gap-6 mx-10 my-10'>
        {
          categoryData.filter((val)=> {
            if(searchTerm == ''){
              return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
            
          })
          .map(blog => (
            <SingleBlog key={blog._id} blog={blog} />
          ))
        }
        {/* {
        categoryData.map(blog => (
          <SingleBlog key={blog._id} blog={blog} />
        ))} */}
      </div>
    </div>
  );
};

export default All;
