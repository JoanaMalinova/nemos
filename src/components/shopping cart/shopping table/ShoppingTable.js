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
                    <tr>
                        <td className={classes["first-column"]}>
                            <div className={classes["img-wrapper"]}>
                                <img src="https://i0.wp.com/acquariocomefare.com/wp-content/uploads/2019/04/Lima-scabra-pettine-di-fiamma.jpg?fit=700%2C395&ssl=1" alt="image"></img>
                            </div>
                            <p>Lima scabra</p>
                        </td>
                        <td>
                            <span className={classes.price}>$240</span>
                        </td>
                        <td>
                            1
                        </td>
                        <td>
                            <span className={classes.price}>$240</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className="purple-btn">Continue Shopping</button>
        </div>
    )
}

export default ShoppingTable;