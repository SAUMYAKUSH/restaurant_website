
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
 import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>{
    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId)
     const [showIndex, setShowIndex]= useState(0);
 //  { 
    // const[resInfo, setResInfo] = useState(null);
    // useEffect(()=>{
        // fetchMenu();
    // },[]);
    // const fetchMenu = async()=>{

        // const arrr=[
            // "80226",
            // "166944",
            // "332194",
            // "80418",
            // "238136",
            // "437010",
            // "253769",
            // "420431",
            // "80320",
            // "301701",
            // "80703",
            // "80701",
            // "201545",
            // "442050",
            // "240249",
            // "327406",
            // "80376",
            // "82234",
            // "392164",
            // "126894"
        // ]
    // }
        
        // arrr.forEach(async(v)=>{
        //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${v}`)
        //     const json = await data.json();
        //     ans[v]=json;

        // })
        // console.log(ans);
        // console.log(data)
        // console.log(json.data?.cards[2]?.card?.card?.info)
        // console.log(json);
        // console.log(resId)
        // console.log(dataMenuAll[resId])
    //    { setResInfo(dataMenuAll[resId])}
        
    // };
    if (resInfo === null  ) return <Shimmer/>
    
    const {name, cuisines,costForTwoMessage} = resInfo?.data?.cards[0]?.card.card.info;

    const {itemCards} =  resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//    console.log(categories)
    return (
        <div className="text-center"> 
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
          {categories.map((category, index)=>{return <RestaurantCategory key={category.card?.card?.title} data={category.card?.card} showItem={index===showIndex && true} setShowIndex={()=>setShowIndex(index)}/>})}
        </div>
    )
}
export default RestaurantMenu;