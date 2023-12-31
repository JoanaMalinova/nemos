import { useContext } from "react";
import classes from "./ShoppingHeader.module.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";

function ShoppingHeader() {

    const {total} = useContext(CartContext);

    return (

        <div className={classes["header-wrapper"]}>
            <h1>
                <NavLink to="/cart" className={({ isActive }) => isActive ? classes.active : undefined}><span className={classes.stage}>1</span> Shopping Cart</NavLink> <i className="fa-solid fa-arrow-right"></i>
                <NavLink ><span className={classes.stage}>2</span> Checkut Details</NavLink><i className="fa-solid fa-arrow-right"></i>
                <NavLink ><span className={classes.stage}>3</span> Order Complete</NavLink>
            </h1>
            {total < 300?  <p className={classes["free-shipping"]}>You are ${300-total} away from free shipping! </p> :
             <p className={classes["free-shipping"]}>Congratulations, your order will be shipped for free! </p>
            }
           
        </div>
    )
}

export default ShoppingHeader;