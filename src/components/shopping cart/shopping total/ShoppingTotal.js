import classes from "./ShoppingTotal.module.css";

function ShoppingTotal() {

    return (
        <div className={classes["total-wrapper"]}>
            <table>
                <thead>
                    <tr>
                        <th>CART TOTALS</th>                       
                    </tr>
              </thead>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>$240</td>
                    </tr>
                    <tr>
                       <form>
                            <label></label>
                            <input></input>
                            <button></button>
                       </form>
                    </tr>
                    
                </tbody>
            </table>
        </div >
    )
}

export default ShoppingTotal;