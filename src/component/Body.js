import RestaurantCard from "../component/RestaurantCard";
import resList from "../utils/data.json"
const Body = () => {
    return (
      <>
        <button className="Search"
        onClick={()=>{
            resList.map((info)=>{
                if(info.info.avgRating <= 4){return <RestaurantCard key={info.info.id} resData={info}/>}
                
              })
        }}
        >Search</button>
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
  
  export default Body;