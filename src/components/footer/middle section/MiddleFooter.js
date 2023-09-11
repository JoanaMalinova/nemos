import styles from "./MiddleFooter.module.css";

export const MiddleFooter = () => {

    return (
        <section className={styles["middle-footer"]}>
            <div className="logo">
                <p>NEMO's</p>
            </div>
            <div className={styles.about}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat accusantium aspernatur totam veniam
                    reiciendis dicta voluptatem, quaerat vel rerum quod harum et iste non facere animi hic
                    necessitatibus dolores velit aliquid optio soluta laborum laboriosam. Error, similique! Beatae quod
                    aperiam alias fugit vitae illo maxime at, consequatur ad vero animi quidem accusamus quia? </p>
            </div>
            <div className={styles.faq}>
                <h3>FAQ</h3>
                <ul>
                    <li>Shipping</li>
                    <li>Return policy</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className={styles.links}>
                <h3>Quick links</h3>
                <ul>
                    <li>Store</li>
                    <li>Fish</li>
                    <li>Invertebrate</li>
                    <li>Coral</li>
                    <li>Decoration</li>
                </ul>
            </div>
        </section>
    )
}