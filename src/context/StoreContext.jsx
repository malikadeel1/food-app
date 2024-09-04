import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

        const[cartItem,setCartItem ]= useState({});   
        
        const addToCart = (itemId)=>{
            if(!cartItem[itemId]){
                setCartItem((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
        }
        const removeFromcart = (itemId)=>{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
        useEffect(()=>{
    console.log(cartItem);
   },[cartItem])
     
    const contextvalue = {
         food_list,
         cartItem,
         setCartItem,
         addToCart,
         removeFromcart
    }
   
    return(
        <StoreContext.Provider value = {contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )


}
export default StoreContextProvider