import { useNavigate } from "react-router-dom";
import classes from "./DiscountCard.module.css";

function DiscountCard({ item }) {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/${item.type}/${item.id}`);
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
                    <p className={classes["discount-price"]}><span className="line-through">${item.price}</span> ${item.price - item.price * item.discount / 100}</p>
                    <button className="purple-btn">Add to Cart</button>
                </section>
            </article>
        </li>
    )
}

export default DiscountCard;