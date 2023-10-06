import { useNavigate } from "react-router-dom";
import classes from "./DiscountCard.module.css";
import { useEffect, useState } from "react";

function DiscountCard({ item, setCookie, cart }) {

    const [isAlreadyAdded, setAlreadyAdded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (cart?.find(curr => curr.id === item.id)) {
            setAlreadyAdded(true);
        }
    }, [isAlreadyAdded]);

    const onCardClick = (ev) => {

        if (ev.target.tagName !== "BUTTON") {
            navigate(`/${item.type}/${item.id}`);
        }
    }
    
    const onAddbtnClick = () => {

        setCookie('cart', [...cart, {
            id: item.id,
            name: item.name || item.species,
            image: item.images[0],
            price: item.price,
            quantity: 1,
            type: item.type
        }]);

        setAlreadyAdded(true);
    }

    return (
        <li className="carousel-cell" onClick={onCardClick}>
            <article className={classes.card}>
                <section className={classes["discount-image"]}>
                    <img src={item.images[0]}
                        alt={item.species || item.name} />
                    <div className={classes["discount-percent"]}>
                        <span>-{item.discount}%</span>
                    </div>
                </section>
                <section className={classes["discount-info"]}>
                    <p>{item.species || item.name}</p>
                    <p className={classes["discount-price"]}><span className="line-through lighter-violet smaller">${item.price}</span> <span className="dark-salmon">${item.price - item.price * item.discount / 100}</span></p>
                    {isAlreadyAdded ?
                        <button className="purple-btn" disabled={true}>Added to Cart <i className="fa-solid fa-check"></i></button> :
                        <button className="purple-btn" onClick={onAddbtnClick}>Add to Cart</button>
                    }
                </section>
            </article>
        </li>
    )
}

export default DiscountCard;