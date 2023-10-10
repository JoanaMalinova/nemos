import styles from "./Consider.module.css"

function Consider() {

    return (
        <section className={styles.consider}>
            <h2>Not Covinced Yet?</h2>
            <ul>
                <li>
                    <div>
                        <i className="fa-solid fa-truck-fast fa-2xl"></i>
                        <p>Fast Door to Door Shipping</p>
                    </div>
                </li>
                <li>
                    <div>
                        <i className="fa-solid fa-truck fa-2xl"><span className={styles.free}>FREE</span></i>
                        <p>Free Shipping over $300</p>
                    </div>
                </li>
                <li>
                    <div className={styles["secure-checkout"]}>
                        <i className="fa-solid fa-shield fa-2xl"><i className="fa-solid fa-cart-shopping"></i></i>
                        <p>Secure Checkout</p>
                    </div>
                </li>

            </ul>
        </section>
    )
}

export default Consider;