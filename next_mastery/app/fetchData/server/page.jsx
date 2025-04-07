import React from "react";
import './style.css';

const fetchData = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await api.json();
  console.log(result);
  return result;

};

const page = async () => {
  const data = await fetchData();
  return (
    <div>
      <h1 className="Css-fething-text">Fetching Data using Server</h1>
      {data.map((todos) => (
        <div key={todos.id}>  
         <p> {todos.title} </p>
        </div>
      ))}
    </div>
  );
};

export default page;
