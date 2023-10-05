import ShoppingRow from "../shopping row/ShoppingRow";
import classes from "./ShoppingTable.module.css";
import { useNavigate } from "react-router-dom";

function ShoppingTable({ cartItems, setCartItems, setCookie }) {

    const navigate = useNavigate();

    const onContinueClick = ()=>{
        navigate('/store');
    }

    return (
        <div className={classes["table-wrapper"]}>
            <table className={classes["shopping-table"]}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(currItem => <ShoppingRow
                        key={currItem.id}
                        item={currItem}
                        setCartItems={setCartItems}
                        setCookie={setCookie}
                        cartItems = {cartItems} />)}
                </tbody>
            </table>
            <button onClick={onContinueClick}>Continue Shopping</button>
        </div>
    )
}

export default ShoppingTable;