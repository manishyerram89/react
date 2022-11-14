import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function Restaurants() {


  let[counter1,Setcounter1]=useState([])
  let[counter2,Setcounter2]=useState([])
  let[counter3,Setcounter3]=useState([])

  return (
    <div>

      <h1 className='text-center'>About us.</h1>
      <Link className="nav-link intro" to=""  onClick={()=>Setcounter1("My Website is a one stop shop for all your fashion and lifestyle needs , It aims at providing a hassle free and enjoyable shopping experience to shoppers across the state.The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country.The difference between the normal shopping website and my website is that my website provides 3D projection of the fashion where the users can rotate and check the clothes. They can also be enlarged/reduced based on users choice ")}>Introduction</Link>
      <em>{counter1}</em>

      <Link className="nav-link intro" to=""  onClick={()=>Setcounter2("The value proposition revolves around giving consumers the power and ease of purchasing fashion and lifestyle products online. Offerings such as the largest in-season product catalogue, 100% authentic products, cash on delivery and 30 day return policy make Myntra, the preferred shopping destination in the country. To make online shopping easier for you, a dedicated customer connect team is on standby to answer your queries 24x7.")}>Value Proposition</Link>
      <em>{counter2}</em>
      
      <Link className="nav-link intro" to=""  onClick={()=>Setcounter3("It understands its shoppers' needs and caters to them with choice of apparel, accessories, cosmetics and footwear from the leading Indian and international brands. Prominent brands include Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK, Timberland, Avirate, Fablndia and Biba to name a few.")}>Brands</Link>
      <em>{counter3}</em>
      
    </div>
  )
}

export default Restaurants