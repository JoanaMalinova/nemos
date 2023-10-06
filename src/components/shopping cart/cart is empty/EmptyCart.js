import { Link } from "react-router-dom";
import classes from "./EmptyCart.module.css";

function EmptyCart() {

    return (
        <div className={classes["empty-wrapper"]}>
            <i className="fa-solid fa-cart-shopping"></i>
            <h2>It seems you cart is empty. Check out our <Link to="/store">catalog</Link> or maybe use the searchbar above.</h2>
            <h3>We are sure you will find something interesting!</h3>
        </div>
    )
}

export default EmptyCart;