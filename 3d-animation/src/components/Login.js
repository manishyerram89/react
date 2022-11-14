import React from 'react'

function login() {
  return (
    <div className='loginbox'>
      <form className='w-50 mx-auto'>
      <h1 className='text-center'>Log In</h1>

      <div className='mb-3'>
      <label HTMLfor="Username">Username</label>
      <input type="text" className='form-control' id="Username"></input> 
      </div>

      <div className='mb-3'>
      <label HTMLfor="Username">Password</label>
      <input type="password" className='form-control' id="Username"></input> 
      </div>

      <button className='btn btn-success d-block mx-auto' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default login