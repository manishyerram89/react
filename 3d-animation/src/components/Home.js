import React from 'react'
import Spline from '@splinetool/react-spline';
import photo from '../images/bubble.png';
import { useState } from 'react';

function Restaurants() {

let [counter1,setcounter1]=useState(0)
let [counter2,setcounter2]=useState(0)
let [counter3,setcounter3]=useState(0)
let [counter4,setcounter4]=useState(0)
let [counter5,setcounter5]=useState(0)
let [counter6,setcounter6]=useState(0)
let [counter7,setcounter7]=useState(0)
let [counter8,setcounter8]=useState(0)


  return (
    <div className='hero '>
    <div className='row'>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet"></link>

<div className="col-lg-3">
    <div className="card mx-auto">
      <div className="card-header mx-auto">
        <h3 className='header mx-auto'>Female bodyfit T-Shirt</h3>
      </div>
      <div className="card-body">
        <h2 className='description'>Just your everyday smooth, comfy tee, a wardrobe staple.</h2>
        <Spline scene="https://prod.spline.design/i6S2aMKl26GRw4iS/scene.splinecode" />
        <div className='price mx-auto'>
    <p>Pricing : $29.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter1(counter1+1)}>+ {counter1}</button></p>
  </div>
    </div>
    </div>
    </div>
  

    <div className="col-lg-3">
    <div className="card mx-auto">
      <div className="card-header mx-auto">
        <h3 className='header mx-auto'>Male T-Shirt</h3>
      </div>
      <div className="card-body">
        <h2 className='description'>Made from the finest fabric.</h2>
        <Spline  scene="https://prod.spline.design/UX3dx1CKHM5JSFvU/scene.splinecode" />
        <div className='price mx-auto'>
    <p>Pricing : $29.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter2(counter2+1)}>+ {counter2}</button></p>
  </div>
    </div>
    </div>
    </div>

<div className="col-lg-3">
<div className="card mx-auto">
  <div className="card-header mx-auto">
    <h3 className='header mx-auto'>Male bodyfit T-Shirt</h3>
  </div>
  <div className="card-body">
    <h2 className='description'>Tees you always wanted.</h2>             
      <Spline scene="https://prod.spline.design/3l45gYhaiCXN-el5/scene.splinecode" />
      <div className='price mx-auto'>
    <p>Pricing : $24.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter3(counter3+1)}>+ {counter3}</button></p>
  </div>
</div>
</div> 
</div>       

<div className="col-lg-3">
<div className="card mx-auto">
  <div className="card-header mx-auto">
    <h3 className='header mx-auto'>Female T-Shirt</h3>
  </div>
  <div className="card-body">
    <h2 className='description'>Never go out of style.</h2>
    <Spline scene="https://prod.spline.design/ySgfRiHkUOlqKzal/scene.splinecode" />
    <div className='price mx-auto'>
    <p>Pricing : $29.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button " onClick={()=>setcounter4(counter4+1)}>+ {counter4}</button></p>
    </div>
  </div>
</div>
</div>        
  </div>

<br/>

  <div className='row'>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;900&display=swap" rel="stylesheet"></link>
  <div className="col-lg-3">
    <div className="card mx-auto">
      <div className="card-header mx-auto">
        <h3 className='header mx-auto'>Male long sleves</h3>
      </div>
      <div className="card-body">
        <h2 className='description'>White is like positivity.</h2>
        <Spline scene="https://prod.spline.design/IGDDtntZYZlKGe6r/scene.splinecode" />
        <div className='price mx-auto'>
    <p>Pricing : $34.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter5(counter5+1)}>+ {counter5}</button></p>
  </div>
      </div>
    </div>
    </div>

    <div className="col-lg-3">
    <div className="card mx-auto">
      <div className="card-header mx-auto">
        <h3 className='header mx-auto'>Female long sleves</h3>
      </div>
      <div className="card-body">
        <h2 className='description'>For that casual look.</h2>
        <Spline scene="https://prod.spline.design/aW8BxZlkXZefDpuG/scene.splinecode" />
        <div className='price mx-auto'>
    <p>Pricing : $19.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter6(counter6+1)}>+ {counter6}</button></p>
  </div>
    </div>
    </div>
    </div>

<div className="col-lg-3">
<div className="card mx-auto">
  <div className="card-header mx-auto">
    <h3 className='header mx-auto'>Unisex Hoodie</h3>
  </div>
  <div className="card-body">
    <h2 className='description'>The colors will fascinate you.</h2>             
    <Spline scene="https://prod.spline.design/8UDPKCM0D7zW7yKj/scene.splinecode" />
      <div className='price mx-auto'>
    <p>Pricing : $34.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter7(counter7+1)}>+ {counter7}</button></p>
  </div>
</div>
</div> 
</div>       

<div className="col-lg-3">
<div className="card mx-auto">
  <div className="card-header mx-auto">
    <h3 className='header mx-auto'>Unisex sweatshirt</h3>
  </div>
  <div className="card-body">
    <h2 className='description'>Design comfort for you.</h2>
    <Spline scene="https://prod.spline.design/jKr2YG8pWjLnJKG0/scene.splinecode" />
    <div className='price mx-auto'>
    <p>Pricing : $39.99 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;   
    <button className="btn btn-lg btn-block btn-success mx-auto" type="button" onClick={()=>setcounter8(counter8+1)}>+ {counter8}</button></p>
    </div>
  </div>
</div>
</div>        
  </div>

<div className='bubbles'>
  <img src={photo}/>
  <img src={photo}/>
  <img src={photo}/>
  <img src={photo}/>
  <img src={photo}/>
  <img src={photo}/>

</div>


</div>
  )
}

export default Restaurants
