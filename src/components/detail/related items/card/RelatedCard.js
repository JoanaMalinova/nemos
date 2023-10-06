import { useNavigate } from "react-router-dom";
import classes from "./RelatedCard.module.css";
import { useState, useEffect } from "react";

function RelatedCard({ item, setCookie, cart }) {

    const [isAlreadyAdded, setAlreadyAdded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (cart?.find(curr => curr.id === item.id)) {
            setAlreadyAdded(true);
        }
    }, [isAlreadyAdded])

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
            type: item.type,
            discount: item.discount
        }]);

        setAlreadyAdded(true);
    }

    return (
        <div className={classes.card} onClick={onCardClick}>
            <div className={classes["img-wrapper"]}>
                <img src={item.images[0]} alt={item.species || item.name} />
            </div>
            <div className={classes["card-info-wrapper"]}>
                <p>{item.species || item.name}</p>
                <p className="bold blueviolet">${item.price}</p>
                {isAlreadyAdded ?
                    <button className="purple-btn" disabled={true}>Added to Cart <i className="fa-solid fa-check"></i></button> :
                    <button className="purple-btn" onClick={onAddbtnClick}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default RelatedCard;