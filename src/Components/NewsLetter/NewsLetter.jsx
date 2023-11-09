import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewsLetter = () => {
  const handleSubmit =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    const newsletter = {email}

    fetch('https://b8a11-server-side-tanvir-art.vercel.app/subscribe', {
      method: "POST",
      headers: {
        'content-type': 'application/json' 
      },
      body: JSON.stringify(newsletter)
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      form.reset();
      toast('Subscribe Successfully')
    })
  }
  return (
    <div className="flex justify-center items-center bg-[#333] py-20">
        <form onSubmit={handleSubmit}>
    <fieldset className="form-control w-80"> 
      <div className="relative">
        <input type="email" name='email' placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <ToastContainer />
    </div>
  )
}

export default NewsLetter
