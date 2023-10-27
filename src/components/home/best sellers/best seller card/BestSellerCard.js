import classes from './BestSellerCard.module.css';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";

function BestSellerCard({ item, setIsClicked, isClicked }) {

    const navigate = useNavigate();
    const matches = useMediaQuery("screen and (max-width:500px)");

    const onCardClick = () => {

        if (matches) {
            const curr = isClicked.find(curr => curr.id === item.id);

            if (curr.clicked) {
                navigate(`/${item.type}/${item.id}`);
            }
            const isClickedNew = isClicked.map(curr => curr.id === item.id ? { ...curr, clicked: true } : { ...curr, clicked: false });
            setIsClicked(isClickedNew);

        } else {
            navigate(`/${item.type}/${item.id}`);
        }
    }

    return (
        <div
            className={isClicked.find(curr => curr.id === item.id && curr.clicked === true) ? `${classes.card} ${classes.active}` : classes.card}
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