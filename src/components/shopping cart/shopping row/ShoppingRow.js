import { useNavigate } from 'react-router-dom';
import classes from './ShoppingRow.module.css';

function ShoppingRow({ item, setCartItems, setCookie, cartItems }) {

    const navigate = useNavigate();

    const onTrashClick = () => {
        const filtered = cartItems.filter(currItem => currItem.id !== item.id)
        setCartItems(filtered);
        setCookie("cart", filtered);
    }

    const onItemClick = () => {
        navigate(`/${item.type}/${item.id}`)
    }

    const onMinusClick = () => {

        const altered = cartItems.map(curr => {
            if (curr.id === item.id) {
                if (curr.quantity > 1) {
                    curr.quantity -= 1;
                }
            }
            return curr;
        });
       
        setCookie('cart', altered);
        setCartItems(altered);
    }

    const onPlusClick = () => {

        const altered = cartItems.map(curr => {
            if (curr.id === item.id) {
                curr.quantity += 1;
            }
            return curr;
        });
       
        setCookie("cart", altered);
        setCartItems(altered);
    }

    return (
        <>
            <tr className={classes["table-row"]}>
                <td className={classes["first-column"]} onClick={onItemClick}>
                    <div className={classes["img-wrapper"]}>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                    <p>{item.name}</p>
                </td>
                <td>
                    <span className={classes.price}>${item.price}</span>
                </td>
                <td>
                    <div className={classes["btn-wrapper"]}>
                        <button onClick={onMinusClick}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={onPlusClick}>+</button>
                    </div>
                </td>
                <td>
                    <div className={classes["subtotal-td"]}>
                        <span className={classes.price}>${item.quantity * item.price}</span>
                        <button className={classes["trash-btn"]} onClick={onTrashClick}><i className="fa-solid fa-trash-can"></i></button>
                    </div>
                </td>
            </tr>

        </>

    )
}

export default ShoppingRow;