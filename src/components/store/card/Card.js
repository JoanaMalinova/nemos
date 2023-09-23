import { useNavigate } from "react-router-dom";
import classes from "./Card.module.css"

function Card({ item }) {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/${item.type}/${item.id}`);
    }

    return (

        <li onClick={onCardClick}>
            <article className={classes.card} >
                <section className={classes["image-wrapper"]}>
                    <img src={item.images[0]}
                        alt={item.species} />
                    <div className={classes["discount-percent"]}>
                        <span>NEW</span>
                    </div>
                </section>
                <section className={classes["info-wrapper"]}>
                    <p>{item.species}</p>
                    <p className={classes["info-price"]}> ${item.price}</p>
                    <button className="purple-btn">Add to Cart</button>
                </section>
            </article>
        </li>
    )
}

export default Card;