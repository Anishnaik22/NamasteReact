import { REST_URL } from "../utils/constants";
import React from "react";

const RestaurantCard = (props) => {
    const {resData} = props
    const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={REST_URL+cloudinaryImageId}
        ></img>
        <h4>{name}</h4>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating}</h5>
      </div>
    );
  };

  export default RestaurantCard;