import {useState} from 'react'
import {useForm} from 'react-hook-form'

function Signin() {

  let[users,setusers]= useState([])

  const {register,handleSubmit,formState:{errors}}=useForm();
  
  const onFormSubmit=(userObj)=>{
    setusers([...users,userObj]);
  }

  
  return (
    <div className='mb-3'>
      <h1 className='text-center'>Sign Up</h1>
      <form className='mx-auto w-50' onSubmit={handleSubmit(onFormSubmit)}>

      <div className='mb-3'>
        <label hTMLfor="username" >Username</label>
        <input type="text" id="username" className='form-control' {...register("username",{minLength:4,maxLength:10,required:true})}/>
        {errors.username?.type==="required" && <p className='text-danger'>Required field</p>}
        {errors.username?.type==="minLength" && <p className='text-danger'>minimum lenght is 4</p>}
        {errors.username?.type==="maxLength" && <p className='text-danger'>maximum length is 10</p>}
      </div>

      <div className='mb-3'>
        <label HTMLfor="dob">Date of Birth</label>
        <input type="date" id="dob" className='form-control' {...register("dob",{required:true})}/>
        {errors.dob?.type==="required" && <p className='text-danger'>Date of birth required</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email Id</label>
        <input type="email" id="email" className="form-control" {...register("email" , {required:true})}/>
        {errors.email?.type==='required' && <p className="text-danger">*email is Required</p>}
      </div>


      <div className='mb-3'>
        <label HTMLfor="pass">Password</label>
        <input type="password" id="pass" className='form-control' {...register("pass",{required:true,minLength:5,maxLength:12})}/>
        {errors.pass?.type==="required" && <p className='text-danger'>Date of birth required</p>}
        {errors.pass?.type==="minLength" && <p className='text-danger'>minimum lenght is 5</p>}
        {errors.pass?.type==="maxLength" && <p className='text-danger'>maximum length is 12</p>}
      </div>

      <button type="submit" className='btn btn-success d-block mx-auto'>Submit</button>
      </form>
    </div>
  )
}

export default Signin