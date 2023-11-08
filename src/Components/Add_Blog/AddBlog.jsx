
import React from 'react'

const AddBlog = () => {


  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const imgUrl = form.imgUrl.value;
    const catagory = form.catagory.value;
    const short_desc = form.short_desc.value;
    const long_desc = form.long_desc.value;
    const dataAndTime = form.dataAndTime.value;

    const blog = {title, imgUrl, catagory, short_desc, long_desc, dataAndTime}

    fetch('http://localhost:5000/add', {
      method: "POST",
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(blog)
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      form.reset();
    })
  }
  return (
    <div>
      <h2 className='text-3xl font-bold text-center py-6'>Add Blog</h2>
      <div className='mx-32'>
        <form onSubmit={handleSubmit}>
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

export default AddBlog 
