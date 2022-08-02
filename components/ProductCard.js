import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="wrapper bg-gray-400 antialiased text-gray-900">
<div>
    
    <img src={props.image} alt="random imgee" className="w-full h-[300px] object-cover object-bottom rounded-lg shadow-md"/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-sm">
   
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{props.title}</h4>
 
  <div className="mt-1">
    {props.price}
    <span className="text-gray-600 text-sm">   </span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">{props.rating} </span>
    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
  </div>  
  </div>
 </div>
  
</div>
  </div>



  )
}
