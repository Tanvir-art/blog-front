import React from 'react'

const NewsLetter = () => {
  return (
    <div className="flex justify-center items-center bg-[#333] py-20">
        <form>
    <fieldset className="form-control w-80"> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
    </div>
  )
}

export default NewsLetter
