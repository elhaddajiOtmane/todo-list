import React from 'react'
import { useState } from "react";

export default function Button(props) {
    const [title,setName]=useState('im a herooooo')
    const [sex,setsex]=useState(99)
    const handelClick = (e)=>{
        console.log("la la land  ",e)
    }

    const handelClickAgine = (name)=>{
        console.log(name+" is a bitch ")
    }
    const handelName = () => {
        setName("zxz")
        setsex(10)

    }
  return (
    <div>        
            <button onClick={handelClick}>Don't Click</button>
    <button onClick={(e)=>handelClickAgine("mma",e)}> dont click me agine</button>
    <button onClick={()=>handelName()}> helo   </button>
     </div>
  )
}
