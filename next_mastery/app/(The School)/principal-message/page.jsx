import React from 'react'
import Link from 'next/link'

const principal = () => {
  return (
    <div>
      <h2>Principal message inside the school</h2>
      <ul>
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About page</Link></li>
      <li><Link href={"/approval/aku"}>aku</Link></li>
      <li><Link href={"/approval/bhus"}>bhus</Link></li>
      <li><Link href={"/about-school"}>school About</Link></li>
     </ul>
    </div>
  )
}

export default principal    
