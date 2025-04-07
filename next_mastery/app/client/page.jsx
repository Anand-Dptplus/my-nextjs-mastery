"use client"
import React, { useState } from 'react'

const page = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>Welcome to Client component</h2>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decrease</button>

    </div>
  )
}

export default page
