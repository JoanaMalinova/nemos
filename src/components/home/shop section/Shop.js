import styles from "./Shop.module.css"

export const Shop = () => {

    return (
        <section id="shop" className={styles["shop-for-wrapper"]}>
            <div className={styles["shop-for"]}>
                <div className={styles["shopping-hours"]}>
                    <h3>Visit us at</h3>
                    <p>Some str.24 Sofia</p>
                    <fieldset>
                        <legend>Opening Hours</legend>
                        <p>Monday - Friday: 10 am to 5 pm</p>
                        <p>Saturday: 9.00am - 4.00pm</p>
                        <p>Sunday: 10.00am - 3.00pm</p>
                    </fieldset>
                </div>
                <div className={`${styles["inner-shop-for"]} ${styles.fish}`}>
                    <button className="purple-btn">Shop for Fish</button>
                </div>
                <div className={`${styles["inner-shop-for"]} ${styles.invertebrate}`}>
                    <button className="purple-btn">Shop for Invertebrate</button>
                </div>
                <div className={`${styles["inner-shop-for"]} ${styles.coral}`}>
                    <button className="purple-btn">Shop for Coral</button>
                </div>
                <div className={`${styles["inner-shop-for"]} ${styles.decoration}`}>
                    <button className="purple-btn">Shop for Decoration</button>
                </div>
            </div>
        </section>
    )
}