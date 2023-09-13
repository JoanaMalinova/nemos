import styles from "./Discount.module.css";


export const Discount = () => {

    const elem = document.getElementsByClassName('carousel')[0];
    console.log(elem);
    const Flickity = require("flickity")

    const flkty = new Flickity(elem, {
        "autoPlay": true,
        "draggable": false,
        "freeScroll": true,
        "wrapAround": true
    });

    return (
        <section id="dicount" className={styles["discounts"]}>
            <div className={styles["discount-wrapper"]}>
                <h2 className={styles["discount-header"]}>Weekly offers</h2>
                <hr />
                <ul className="carousel" >
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://exoticland.bg/wp-content/uploads/2022/11/978cd78f31998f43905d6d9b9b009603.jpg"
                                    alt="reef-lobster" />
                                <div className={styles["discount-percent"]}>
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Enoplometopus daumi</p>
                                <p className={styles["discount-price"]}><span className={styles["line-through"]}>$150</span> $130</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Goniopora_closeup.jpg"
                                    alt="gonipora-color" />
                                <div className={styles["discount-percent"]}>
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Gonipora spp.</p>
                                <p className={styles["discount-price"]}><span className={styles["line-through"]}>$340</span> $300</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/jpg_E_una_specie_ermafrodita_proterogina_con_femmine_cioe_che_possono_diventar_maschi_invecchiando_c_Giuseppe_Mazza.jpg"
                                    alt="angelfish" />
                                <div className={styles["discount-percent"]}>
                                    <span>-40%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Pomacanthus-xanthometopon</p>
                                <p className={styles["discount-price"]}><span className={styles[" line-through"]}>$220</span> $140</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://reefsolution.com/cdn/shop/products/venustus2.jpg?v=1664487549"
                                    alt="angelfish" />
                                <div className={styles["discount-percent"]}>
                                    <span>-10%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Pomacanthus-xanthometopon</p>
                                <p className={styles["discount-price"]}><span className={styles[" line-through"]}>$240</span> $212</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://live.staticflickr.com/65535/17220543790_7298b56a62_b.jpg"
                                    alt="pseudanthias-pleurotaenia" />
                                <div className={styles["discount-percent"]}>
                                    <span>-5%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Pseudanthias pleurotaenia</p>
                                <p className={styles["discount-price"]}><span className={styles["line-through"]}>$80</span> $72</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                    <li className="carousel-cell">
                        <article className={styles.card}>
                            <section className={styles["discount-image"]}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Panulirus_versicolor.jpg"
                                    alt="pseudanthias-pleurotaenia" />
                                <div className={styles["discount-percent"]}>
                                    <span>-20%</span>
                                </div>
                            </section>
                            <section className={styles["discount-info"]}>
                                <p>Panulirus vesicolor</p>
                                <p className={styles["discount-price"]}><span className={styles["line-through"]}>$260</span> $214</p>
                                <button className="purple-btn">Add to Cart</button>
                            </section>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    )
}