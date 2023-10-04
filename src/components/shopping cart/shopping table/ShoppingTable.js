import ShoppingRow from "../shopping row/ShoppingRow";
import classes from "./ShoppingTable.module.css";

function ShoppingTable() {

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
                   <ShoppingRow/>
                </tbody>
            </table>
            <button>Continue Shopping</button>
        </div>
    )
}

export default ShoppingTable;