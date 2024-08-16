import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./data.json"

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          alt="logo"
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/198241078/original/dda4bf142653d45ea85335e4c80d466b90a187e3/design-a-food-logo-with-fast-delivery.png"
        ></img>
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

const RestaurantCard = (props) => {
  const {resData} = props
  const {cloudinaryImageId,name,cuisines,avgRating} = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      ></img>
      <h4>{name}</h4>
      <h5>{cuisines}</h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="Search">Search</div>
      <div className="res-container">
        {
          resList.map((info)=>{
            return <RestaurantCard key={info.info.id} resData={info}/>
          })
        }
      </div>
    </>
  );
};

export default function AppLayout() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
