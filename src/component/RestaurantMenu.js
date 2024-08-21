import React from 'react';
import {useEffect, useState} from "react"
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () =>{

    const [resData,setResData] = useState(null);

    const {resId} = useParams();
    console.log(resId)
    

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>
    {
        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.513463&lng=73.76985789999999&restaurantId=${resId}`
        )
        const json = await data.json();
        setResData(json.data)
    };

    if(resData === null) return <Shimmer/>

    const res = resData?.cards?.[2]?.card?.card;

    const rec = resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
    // console.log(rec)



    return(
        <>
            <h1>{res?.info?.name}</h1>
            <p>{res?.info?.cuisines}</p>
            <h2>Menu</h2>
            <ul>
                {rec.map(items =>  <li key = {items?.card?.info.id}> {items?.card?.info.name}  === Rs.{items?.card?.info.price /100 || items?.card?.info.defaultPrice /100}</li>)}
                <li>{rec?.name}</li>
                <li>{res?.info?.costForTwoMessage}</li>
            </ul>


        </>
    );
}
export default RestaurantMenu;