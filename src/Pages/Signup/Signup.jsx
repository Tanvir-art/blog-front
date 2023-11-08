import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const Signup = () => {
    const [register, setRegister] = useState('');
    const [success, setSuccesss] = useState('');
    const {createUSer} = useContext(AuthContext)
    const  handleSignUp = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.nam.value;
        const email = form.email.value;
        const password = form.password.value;


        setRegister('')
        setSuccesss('')
    
        if(password.length < 6){
          toast('Password should be at last 6 character');
          return;
        }else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[\w!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(password)){
          toast("In password give at least one capital letter & One special keyword");
          return;
        }


        createUSer(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user)
            toast('User Created Successfully')
        })
        .catch(error => {
            console.log(error)
            setRegister(error.message)
           
            toast("email already use");
        })
    }
  return (
    <div className='flex flex-col md:flex-row lg:flex-row justify-around items-center'>
        <div className=' ml-10'>
      <img className='w-full' src="/img/signup.jpg" alt="" />

        </div>

      <div className='mr-10'>
      <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">


    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='nam' placeholder="Name" className="input input-bordered" />
        </div>

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
          <button className="btn btn-primary">Sign uP</button>
        </div>
      
        <span>Already Signup? Go to <span className='text-blue-500'> <Link to='/login'>Login</Link> </span></span>
        
      </form>
      <ToastContainer />
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Signup
