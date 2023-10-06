import { useState, useEffect } from "react";
import ShoppingHeader from "../shopping header/ShoppingHeader";
import ShoppingMiddleSection from "../shopping middle section/ShoppingMiddleSection";
import { useCookies, CookiesProvider } from "react-cookie";
import { CartContext } from "../../../contexts/CartContext";


function ShoppingMain() {

    const [total, setTotal] = useState(0);
    const [cookies, setCookie] = useCookies(["cart"]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cookies.cart);
    })

    return (
        <CartContext.Provider value={{
            total,
            setTotal,
            cartItems,
            setCartItems,
            cookies,
            setCookie
        }}>
            <CookiesProvider>
                <ShoppingHeader />
                <ShoppingMiddleSection />
            </CookiesProvider>
        </CartContext.Provider>
    )
}

export default ShoppingMain;