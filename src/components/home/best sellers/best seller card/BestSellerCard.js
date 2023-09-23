import classes from './BestSellerCard.module.css';
import { useNavigate } from "react-router-dom";

function BestSellerCard({ item }) {

    const navigate = useNavigate()

    const onCardClick = () => {
        navigate(`/${item.type}/${item.id}`)
    }


    return (
        <div
            className={classes.card}
            style={{ "background": `url(${item.images[0]}) no-repeat 50% / cover` }}
            onClick={onCardClick}
        >
            <div className={classes.content}>
                <h2>{item.species}</h2>
                <span>${item.price}</span>
            </div>
        </div>
    )
}

export default BestSellerCard;