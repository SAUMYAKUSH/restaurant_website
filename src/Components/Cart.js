import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/CartSlice";
 const Cart=()=>{
   
    const cartItem = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    console.log(cartItem)
    let total = cartItem.reduce((sum,current)=>{
    console.log(current.card.info)
    return (sum + Number(current?.card?.info?.price?current?.card?.info?.price:current?.card?.info?.defaultPrice))}, 0
   );
   total/=100;
 

    return<div className="text-center m-4 p-4">
        <h1 className="text-xl font-bold"> Cart </h1>
        <div className="w-6/12 m-auto">
         <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
         {cartItem.length=== 0 && <h1>Cart is empty</h1>}
            <ItemList items={cartItem}/>
        </div>
        <p className="text-lg font-bold"> Total - {`${total.toFixed(2)}`}</p>
    </div>
 }

 export default Cart;