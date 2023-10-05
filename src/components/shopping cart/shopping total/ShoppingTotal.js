import { useEffect, useState } from "react";
import classes from "./ShoppingTotal.module.css";

function ShoppingTotal({ cartItems }) {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const currTotal = cartItems.reduce((acc, currValue) => acc + currValue.price * currValue.quantity, 0);
        setTotal(currTotal);
    }, [cartItems])

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
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td>
                            <form className={classes["coupon-wrapper"]}>
                                <label htmlFor="coupon">Coupon</label>
                                <input id="coupon" name="coupon" placeholder="Coupon Code"></input>
                                <button >Apply Coupon</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td>
                            <button >To Checkout</button>
                            <div className={classes["payment-methods"]}>
                                <i className="fa-brands fa-cc-visa"></i>
                                <i className="fa-brands fa-cc-mastercard"></i>
                                <i className="fa-brands fa-cc-paypal"></i>
                                <i className="fa-brands fa-cc-amex"></i>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default ShoppingTotal;