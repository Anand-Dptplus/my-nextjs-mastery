'use client'
import React, { useState } from 'react'
import { product } from "../../data"
import { useRouter,usePathname } from 'next/navigation';
import Image from 'next/image'



const page = ({params}) => {

    const { slug } =  React.use(params);

    const backpage = useRouter();
    const location = usePathname().split("/");

    console.log("pathname: ", location[2]);
  
    const newProducts = product.filter((data) =>
        data.category.toLowerCase().includes(slug.toLowerCase())
    );
  return (
    <div>
      <h2>dynamic slug page</h2>
      {newProducts.map((product) =>(
        <div key={product.title}>
            <ul>
                <li>Title: {product.title}</li>
                <li>Price: {product.price}</li>
                <li>User Rating: {product.userRating}</li>
            </ul>
        </div>
      ))}
      <Image
        src="https://cdn.pixabay.com/photo/2020/10/21/19/12/doctor-5674049_1280.png"
        alt="Pixabay Image"
        width={200}
        height={150}
      />

      {/* Freepik Image */}
      <Image
        src="https://img.freepik.com/free-photo/young-doctor-posing-with-crossed-arms_23-2149870128.jpg"
        alt="Freepik Image"
        width={200}
        height={150}
      />
      <Image src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?t=st=1743756904~exp=1743760504~hmac=fcb873aa7b72e9ec0246aa6e0ac3811710afe6dd98ecbf5657e0ba491b4793a0&w=996"  width={200}
        height={150} alt="check image"/>
        
        <Image
        src="/images/dentist-8576790_1280.webp"
        alt="Local Image"
        width={100}
        height={100}
      />
       <Image
        src="/images/map.png"
        alt="Local Image"
        width={500}
        height={500}
      />
      <button onClick={()=>backpage.push('/products')}>Back To the page</button>
    </div>
  )
} 

export default page