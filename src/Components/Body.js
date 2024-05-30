import { mockDataReal } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import React, { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = ()=>{
    const [listOfRestaurant,setListOfRestaurant ] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
         setTimeout(()=>{

            
             fetchData();
         },1000)
    },[]);
    const fetchData = async()=>{
        //  const data = await fetch("")
       
        // const json = await data.json(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
         const json =  mockDataReal;
        
        //  console.log(json)
         setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //  setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //  setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    // Conditional Rendering
    console.log(listOfRestaurant)
     arr = filteredRestaurant.map(r=> r.info.id)
    console.log(arr)
    if(listOfRestaurant.length===0){
        return <Shimmer/>
    }
    

    return    (
    
        <div className="body">
            { <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{ const filteredRestaurant =  listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                     setfilteredRestaurant(filteredRestaurant) }}>Search</button>
                </div>
                 <div className="m-4 p-4 flex items-center">
                   <button className="px-4 py-1 bg-gray-300 rounded-lg" onClick={() =>{const filteredList = listOfRestaurant.filter((res) =>res.info.avgRating > 4);

                    setfilteredRestaurant(filteredList)}}
                    >
                        Top Rated Restaurant
                        </button>
                 </div>
            </div> }
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map(restaurants => <RestaurantCard key={restaurants.info.id} resData={restaurants }/>)
                }
                
                
            </div>  
        </div>
    )
};

export default Body;
