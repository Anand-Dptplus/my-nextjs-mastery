"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
            const fetchData = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await api.json();
            setData(result);
            console.log("getting the data = ",result);
        };
        fetchData();
    },[]);
  return (
    <div>
    <h1>Fetching Data Using Clent </h1>
       {data.map((user) =>
       <div key={user.id}>
           <h4> {user.name}</h4>
           <h6>{user.email}</h6>
       </div>
       )}
    </div>
  )
}

export default page
