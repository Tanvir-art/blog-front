import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const bloggs = useLoaderData();
    console.log(bloggs)

      
  return (
    <div>
      <h2>update {title}</h2>

      <div className='mx-32'>
        <form >
            <div>
               <input placeholder='Blog Title' className='input border-slate-300 w-full ' type="text" name='title'/>
            </div>
            <div className='py-4'>
               <input placeholder='Image Url' className='input border-slate-300 w-full ' type="text" name='imgUrl'/>
            </div>
            <div>
                <select className='input  border-slate-300 w-full ' name="catagory" id="">
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="healthy">Healthy</option>
                </select>
            </div>

            <div className='py-4'>
                <textarea placeholder='Short Description' className='input  border-slate-300 w-full h-20' name="short_desc" id="" cols="20" rows="30"></textarea>   
            </div>

            <div className='pb-4'>
                <textarea placeholder='Long Description' className='input  border-slate-300 w-full h-32' name="long_desc" id="" cols="40" rows="50"></textarea>   
            </div>

            <div>
               <input className='input border-slate-300 w-full ' type="datetime-local" name='dataAndTime'/>
            </div>

            <div className='py-4 flex justify-center items-center'>
                <button className='px-6 rounded py-3 bg-[#333] text-white'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Update
