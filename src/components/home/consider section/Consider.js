import styles from "./Consider.module.css"

function Consider() {

    return (
        <section className={styles.consider}>
            <div className={styles["inner-wrapper"]}>
                <h2 className={styles["home-header"]}>Not Covinced Yet?</h2>
                <div className={styles["icon-wrapper"]}>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-truck-fast fa-2xl"></i>
                        <p>Fast Door to Door Shipping</p>
                    </div>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-truck fa-2xl"><span className={styles.free}>FREE</span></i>
                        <p>Free Shipping over $300</p>
                    </div>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-shield fa-2xl"><i className="fa-solid fa-cart-shopping"></i></i>
                        <p>Secure Checkout</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consider;





