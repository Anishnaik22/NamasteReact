import RestaurantCard from "../component/RestaurantCard";
import data from "../utils/data.json"
import React, { useState } from 'react';

const Body = () => {
  const [listOfRestaurant,setListOfRestaurant]=useState(data);
    return (
      <>
        <button className="Search"
        onClick={()=>{
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating>4
           ); 
           setListOfRestaurant(filteredList)
        }}
        >Search</button>
        <div className="res-container"> 
          {
              listOfRestaurant.map((info)=>{
              return <RestaurantCard key={info.info.id} resData={info}/>
            })
          }
        </div>
      </>
    );
  };
  
  export default Body;