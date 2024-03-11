import React from "react";
import {IMAGE_URL} from "../utils/constant";
import {addItem,removeItem} from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  const dispatch= useDispatch();
  const handleAddItem=(item)=>{
    // Dispatch an action
    dispatch(addItem(item))
  }
  const handleRemoveItem=(item)=>{
    dispatch(removeItem(item))
  }
  console.log(items);
  return (
    <div>
      
        {items.map((item) => (
          <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
           <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
            {item.quantity && <h1 className="font-bold">Quantity-- {item.quantity} </h1>}
            <div className="text-right flex justify-center" >
             <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg" onClick={()=>handleAddItem(item)}> Add +</button>
             {item.quantity>0 && <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg" onClick={()=>handleRemoveItem(item)}>Remove</button>}

            </div>
            <img src={IMAGE_URL + item?.card?.info?.imageId} className="w-40 p-4"></img>

            </div>
          </div>
        ))}
      
    </div>
  );
};

export default ItemList;
