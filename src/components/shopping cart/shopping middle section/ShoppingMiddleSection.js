import { useCookies } from "react-cookie";
import ShoppingTable from "../shopping table/ShoppingTable";
import ShoppingTotal from "../shopping total/ShoppingTotal";
import classes from "./ShoppingMiddleSection.module.css";
import { useEffect, useState } from "react";

function ShoppingMiddleSection(){

    const[cookies, setCookie] = useCookies(["cart"]);
    const[cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        setCartItems(cookies.cart);
    })
     
    return(
        <div className={classes["middle-section"]}>
            <ShoppingTable cartItems={cartItems} setCartItems={setCartItems} setCookie= {setCookie} />
            <ShoppingTotal cartItems={cartItems}/>
        </div>
    )
}

export default ShoppingMiddleSection;