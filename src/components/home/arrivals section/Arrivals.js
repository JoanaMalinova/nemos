import styles from "./Arrivals.module.css"

export const Arrivals = () => {
    return (
        <section id={styles.arrivals} className={styles["newest-arrivals"]}>
            <h2>Newest Arrivals</h2>
            <ul className={styles["inner-arrivals"]}>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://exoticland.bg/wp-content/uploads/2022/11/9dcb6feb95a3233071397c7fa1df1808.jpg"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Pterois miles</p>
                            <p className={styles["discount-price"]}> $450</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://images2.ratemyfishtank.com/photo/10/940x450h/4000/3543/3038-5-orange-sea-star-U597gf.jpg"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Echinaster sp. orange</p>
                            <p className={styles["discount-price"]}> $430</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://vividaquariums.com/cdn/shop/products/PorcelainCrab1_600x.jpg?v=1647304832"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Neopetrolisthes ohshimai</p>
                            <p className={styles["discount-price"]}> $230</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://i0.wp.com/acquariocomefare.com/wp-content/uploads/2019/04/Lima-scabra-pettine-di-fiamma.jpg?fit=700%2C395&ssl=1"
                                alt=" reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Lima scabra</p>
                            <p className={styles["discount-price"]}> $100</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://oportoreef.pt/wp-content/uploads/2022/07/08360ZC-Zanclus20canescens20oportoreef-16.jpg"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Zanclus canescens</p>
                            <p className={styles["discount-price"]}> $120</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://reefsolution.com/cdn/shop/products/36caf884778b425dba4b5aafba0c2673.jpg?v=1618545464"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Cirrhilabrus linatus</p>
                            <p className={styles["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://www.freshnmarine.com/cdn/shop/products/371885.jpg?v=1470937504"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Balistoides conspicillum</p>
                            <p className={styles["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={styles.card}>
                        <section className={styles["discount-image"]}>
                            <img src="https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/1-Balistapus-undulatus-%C2%A9-Giuseppe-Mazza.jpg"
                                alt="reef-lobster" />
                            <div className={styles["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={styles["discount-info"]}>
                            <p>Balistapus undulatus</p>
                            <p className={styles["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
            </ul>
        </section>
    )
}