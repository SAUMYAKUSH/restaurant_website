import { Link } from "react-router-dom";
import { IMAGE_URL } from "../utils/constant";

const RestaurantCard=({resData})=>{
     const {name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId,id} = resData.info;

     return(
       <Link to={`/restaurants/${id}`}>
       <div  className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-400">
       <img className="rounded-lg" alt="res-logo" src={IMAGE_URL+cloudinaryImageId}/>
           <h3 className="font-bold py-4 text-lg">{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating} stars</h4>
           <h4>{costForTwo}</h4>
           <h4>{sla.slaString}</h4>
           
       </div>
       </Link>
   )
};

export default RestaurantCard;