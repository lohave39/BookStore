



import React from "react";

function Card({ item }) {
    console.log({item})
  return (
    <div className="card fixed-size bg-base-100 w-92 shadow-xl mt-8 border-separate border-white over:shadow-2xl transition-transform duration-300 transform hover:scale-105">
        
      <figure>
        <img src={item.image || "https://via.placeholder.com/150"} alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          {item.price === 0 && <div className="badge badge-secondary">Free</div>}
        </h2>
        <p>{item.Title}</p>
        <div className="card-actions justify-between ">
            <div className=" cursor-pointer badge badge-outline border hover:bg-pink-500 duration-200 px-4 py-1 ">Buy Now </div>
            <div className="badge badge-outline ">{item.price}</div>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
