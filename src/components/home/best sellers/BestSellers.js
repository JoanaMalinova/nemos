import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./BestSellers.module.css";
import BestSellerCard from "./best seller card/BestSellerCard";
import { useState } from "react";

function BestSellers() {

    const { items } = useLoaderData();
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(items.map(curr => curr = { id: curr.id, clicked: false }));

    const onBttnClick = () => {
        navigate("/store");
    }

    return (
        <section id="best-sellers" className={styles["best-sellers"]}>
            <div className={styles["best-sellers-heading-wrapper"]}>
                <h2 className={styles["home-header"]}>Best Sellers</h2>
            </div>
            <div className={styles.container}>
                {items.map(item => <BestSellerCard
                    key={item.id}
                    item={item}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                />)}
            </div>
            <button className="purple-btn" onClick={onBttnClick}>View all</button>
        </section>
    )
}

export default BestSellers;