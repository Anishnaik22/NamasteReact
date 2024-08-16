import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.json"

const RestaurantCard = (props) => {
  const {resData} = props;
  console.log(resData)
  const {name,cuisines,avgRating} = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
      ></img>
      <h4>{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating} stars</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/198241078/original/dda4bf142653d45ea85335e4c80d466b90a187e3/design-a-food-logo-with-fast-delivery.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
