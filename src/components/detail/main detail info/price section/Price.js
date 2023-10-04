
import classes from "./Price.module.css";

function Price({ item , quantity, setQuantity}) {    

    const onMinusClick = () => {

        if (quantity === 1) {
            return;
        }

        setQuantity(quantity - 1);
    }

    const onPlusClick = () => {
        setQuantity(quantity + 1);
    }

    return (
        <div className={classes["price-wrapper"]} >
            {item.discount ? <h2><span className="line-through smaller"> ${item.price}</span> <span className="salmon">${item.price - item.price * item.discount / 100}</span></h2> : <h2>${item.price}</h2>}
            <div className={classes["btn-wrapper"]}>
                <button onClick={onMinusClick}>-</button>
                <span>1</span>
                <button onClick={onPlusClick}>+</button>
            </div>
        </div>
    )
}

export default Price;