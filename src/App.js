import React, { useEffect, useState } from "react";
import {createRoot} from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider , Outlet, Route} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart"





const AppLayout = ()=>{
    const[userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Saumya Kushwaha"
        };
        setUserName(data.name)
    }, []);
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app"> 
         <Header/>
         <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
             {
                path: '/',
                element:<Body/>
             },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path:"/cart",
                element: <Cart/>
            }
        ]
    },
   
   
]);

const root = createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>);
