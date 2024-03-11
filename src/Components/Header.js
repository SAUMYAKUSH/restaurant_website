import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import CartContext from "../Store/cart-context";
const Header = ()=>{
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus()
  const {loggedInUser} = useContext(UserContext)
  // const cartCtx = useContext(CartContext)
  // const numberOfItemsInCart = cartCtx.reduce((currentNum, item)=>{
  //   return currentNum + item.amount
  // },0)

  let btnNameHandler =()=> {
    buttonName==="Login"?
    setButtonName("Logout"):
    setButtonName('Login')
  }
  // Subscribing to the store using a selector
  const cartItems = useSelector((store)=>store.cart.items)
  let totalItems=cartItems.reduce((total,current)=>{
    return (total+current.quantity)
  },0)
    return( 
        <div className="flex justify-between bg-purple-300 shadow-lg m-2 h-40">
          <div className="logo-container">
            <img className="w-40" src={LOGO_URL}/>
          </div>
          <div className="flex items-center">
               <ul className="flex p-4 m-4">
                <li className="px-4">Online Status {onlineStatus ? "✅":"🔴" }</li>
                   <li className="px-4">
                    <Link to='/'>Home</Link></li>
                   <li className="px-4">
                   <Link to='/about'>About Us</Link> 
                    </li>
                   <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                   <li className="px-4 font-bold text-lg"> <Link to="/cart">Cart - ({totalItems } items)</Link></li>
                   <button className="login" onClick={btnNameHandler}>{buttonName}</button>
                   <li className="px-4 font-bold">{loggedInUser}</li>
                   
               </ul>
          </div>
        </div>
    )
}
export default Header;