import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
     <h2>This is my home page</h2>
     <ul>
     <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/about"}>About page</Link></li>
      <li><Link href={"/approval/aku"}>aku</Link></li>
      <li><Link href={"/approval/bhus"}>bhus</Link></li>
      <li><Link href={"/about-school"}>school About</Link></li>
      <li><Link href={"/products"}>Product</Link></li>
     </ul>
    </div>
  )
}

export default page
