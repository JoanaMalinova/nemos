import { useContext } from "react";
import ShoppingRow from "../shopping row/ShoppingRow";
import classes from "./ShoppingTable.module.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { useMediaQuery } from "@mui/material";

function ShoppingTable() {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const matches = useMediaQuery("screen and (max-width:500px)");

    const onContinueClick = () => {
        navigate('/store');
    }

    return (
        <div className={classes["table-wrapper"]}>
            <table className={classes["shopping-table"]}>
                <thead>
                    <tr>
                        <th>Product</th>
                        {!matches && <th>Price</th>}
                        <th>Quantity</th>
                        {!matches && <th>Subtotal</th>}
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(currItem => <ShoppingRow key={currItem.id} item={currItem} matches={matches} />)}
                </tbody>
            </table>
            <button onClick={onContinueClick}>Continue Shopping</button>
        </div>
    )
}

export default ShoppingTable;