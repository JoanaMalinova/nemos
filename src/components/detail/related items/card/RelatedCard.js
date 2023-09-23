import { useNavigate } from "react-router-dom";
import classes from "./RelatedCard.module.css";

function RelatedCard({ item }) {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`/${item.type}/${item.id}`)
    }

    return (
        <div className={classes.card} onClick={onCardClick}>
            <div className={classes["img-wrapper"]}>
                <img src={item.images[0]} alt={item.species || item.name} />
            </div>
            <div className={classes["card-info-wrapper"]}>
                <p>{item.species || item.name}</p>
                <p className="bold blueviolet">${item.price}</p>
                <button className="purple-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default RelatedCard;