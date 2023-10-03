import classes from "./ShoppingHeader.module.css";
import { NavLink } from "react-router-dom";

function ShoppingHeader() {

    return (

        <div className={classes["header-wrapper"]}>
            <h1>
                <NavLink to="/cart" className={({ isActive }) => isActive ? classes.active : undefined}><span className={classes.stage}>1</span> Shopping Cart</NavLink> <i className="fa-solid fa-arrow-right"></i>
                <NavLink ><span className={classes.stage}>2</span> Checkut Details</NavLink><i className="fa-solid fa-arrow-right"></i>
                <NavLink ><span className={classes.stage}>3</span> Order Complete</NavLink>
            </h1>
            <p className={classes["free-shipping"]}>You are $100 away from free shipping! </p>
        </div>
    )
}

export default ShoppingHeader;