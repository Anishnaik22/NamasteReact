import RestaurantCard from "../component/RestaurantCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.513463&lng=73.76985789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)

    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
  <input
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="Search1" onClick={()=>{
           const filteredList = listOfRestaurant.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          console.log(filteredList)
          setFilteredRestaurant(filteredList);
      }}>
        Search
      </button>
      {/* <button
        className="Search"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.5
          );
          setFilteredRestaurant(filteredList);
        }}
      >Search</button> */}
      <div className="res-container">
        {filteredRestaurant.map((res) => {
          return <Link key={res.info.id} to={"/restaurant/"+res.info.id} ><RestaurantCard  resData={res} /></Link>;

        })
        
        }
      </div>
    </>
  );
};


export default Body;
