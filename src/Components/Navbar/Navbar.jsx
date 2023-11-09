import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut =()=>{
    logOut()
    .then(()=> console.log('user log out'))
    .catch(error=> console.log(error))
  }
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all'>All Blog</NavLink></li>
        {user? 
        <>
                <li><NavLink to='/add'>Add Blog</NavLink></li>
        <li><NavLink to='/feature'>Feature Blog</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        </>
        : 
        ""
      
      }
        {user? "" : 
        <>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signup'>Login</NavLink></li>
        </>
        }

      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/all'>All Blog</NavLink></li>
        {user? 
        <>
                <li><NavLink to='/add'>Add Blog</NavLink></li>
        <li><NavLink to='/feature'>Feature Blog</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        </>
        : 
        ""
      
      }
        {user? "" : 
        <>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signup'>Login</NavLink></li>
        </>
        }

    </ul>
  </div>

  <div className="navbar-end">
  {
    user? 
    <a onClick={handleLogOut} className="btn">Log Out</a>
    :
    <Link to='/login'>
    <p className="btn">Log in</p>
    
    </Link>
  }
  </div>
</div>
    </div>
  )
}

export default Navbar
