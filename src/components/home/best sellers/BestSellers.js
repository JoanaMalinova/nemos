import { useNavigate } from "react-router-dom";
import styles from "./BestSellers.module.css";

function BestSellers() {
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
                <div>
                    <div className={styles.content}>
                        <h2>Leopard Discus, Blue Base</h2>
                        <span>240$</span>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h2>Stenopus Hispidus</h2>
                        <span>120$</span>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h2>Hymenocera pictus</h2>
                        <span>400$</span>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h2>Tripneustes gratilla</h2>
                        <span>800$</span>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h2>Tridacna squanosa</h2>
                        <span>650$</span>
                    </div>
                </div>
                <div>
                    <div className={styles.content}>
                        <h2>Pomacanthus annularis</h2>
                        <span>330$</span>
                    </div>
                </div>
            </div>
            <button className="purple-btn" onClick={onBttnClick}>View all</button>
        </section>
    )
}

export default BestSellers;