import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const  handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-around'>
      <div>
        <img src="/img/login.jpg" alt="" />
      </div>

      <div className='mr-10'>
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">



        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      
        <span>Still Not SIgnup? Go to <span className='text-blue-500'> <Link to='/signup'>Signup</Link> </span></span>
        
      </form>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Login
