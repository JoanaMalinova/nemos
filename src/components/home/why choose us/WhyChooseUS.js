import styles from "./WhyChooseUs.module.css";

function  WhyChooseUs(){

    return (
        <section className={styles["why-choose-us"]}>
            <div className={styles["inner-wrapper"]}>
                <h2 className={styles["home-header"]}>Why Choose Us</h2>
                <div className={styles["icon-wrapper"]}>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-headset fa-2xl"></i>
                        <p>Support 24/7</p>
                    </div>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-seedling fa-2xl"></i>
                        <p>Eco Friendly</p>
                    </div>
                    <div className={styles["icon-holder"]}>
                        <i className="fa-solid fa-wallet fa-2xl"></i>
                        <p>Money Back</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;