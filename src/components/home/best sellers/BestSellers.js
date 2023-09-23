import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./BestSellers.module.css";
import BestSellerCard from "./best seller card/BestSellerCard";

function BestSellers() {

    const items = useLoaderData();
    const navigate = useNavigate();

    const onBttnClick = () => {
        navigate("/store");
    }

    // const scrollToTop = () => {
    //     window.scrollTo(0, 0)
    // }

    return (
        <section id="best-sellers" className={styles["best-sellers"]}>
            <div className={styles["best-sellers-heading-wrapper"]}>
                <h2 className={styles["home-header"]}>Best Sellers</h2>
            </div>
            <div className={styles.container}>
                {items.map(item => <BestSellerCard key={item.id} item={item} />)}
            </div>
            <button className="purple-btn" onClick={onBttnClick}>View all</button>
        </section>
    )
}

export default BestSellers;