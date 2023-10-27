import classes from "./Card.module.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Card({ item, setCookie, cart }) {

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

        <li onClick={onCardClick}>
            <article className={classes.card} >
                <section className={classes["image-wrapper"]}>
                    <img src={item.images[0]}
                        alt={item.species} />
                    {item.discount || item.new ?
                        <div className={classes["info-bubble"]}>
                            <span>{item.discount ? `-${item.discount}%` : "NEW"}</span>
                        </div> : <></>
                    }
                </section>
                <section className={classes["info-wrapper"]}>
                    <p>{item.species || item.name}</p>
                    {item.discount ? <p className={classes["info-price"]}> <span className="line-through lighter-violet smaller">${item.price}</span> <span className="salmon">${item.price - item.price * item.discount / 100}</span></p> :
                        <p className={classes["info-price"]}> ${item.price}</p>}
                    {isAlreadyAdded ?
                        <button className="purple-btn" disabled={true}>Added to Cart <i className="fa-solid fa-check"></i></button> :
                        <button className="purple-btn" onClick={onAddbtnClick}>Add to Cart</button>
                    }
                </section>
            </article>
        </li>
    )
}

export default Card;