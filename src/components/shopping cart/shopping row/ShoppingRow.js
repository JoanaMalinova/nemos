import classes from './ShoppingRow.module.css';

function ShoppingRow() {
    return (
        <tr className={classes["table-row"]}>
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
                <div className={classes["btn-wrapper"]}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </td>
            <td>
                <div className={classes["subtotal-td"]}>
                    <span className={classes.price}>$240</span>
                    <button className={classes["trash-btn"]}><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </td>
        </tr>
    )
}

export default ShoppingRow;