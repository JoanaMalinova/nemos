import classes from "./Catalog.module.css";
import { useNavigate } from "react-router-dom"

function Catalog() {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate('/fish/someId');
    }

    return (
        <section className={`${classes["newest-arrivals"]} ${classes["store-main"]}`}>
            <ul className={classes["inner-store"]}>
                <li onClick={onCardClick}>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://exoticland.bg/wp-content/uploads/2022/11/9dcb6feb95a3233071397c7fa1df1808.jpg"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Pterois miles</p>
                            <p className={classes["discount-price"]}> $450</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://images2.ratemyfishtank.com/photo/10/940x450h/4000/3543/3038-5-orange-sea-star-U597gf.jpg"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Echinaster sp. orange</p>
                            <p className={classes["discount-price"]}> $430</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://vividaquariums.com/cdn/shop/products/PorcelainCrab1_600x.jpg?v=1647304832"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Neopetrolisthes ohshimai</p>
                            <p className={classes["discount-price"]}> $230</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://i0.wp.com/acquariocomefare.com/wp-content/uploads/2019/04/Lima-scabra-pettine-di-fiamma.jpg?fit=700%2C395&ssl=1"
                                alt=" reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Lima scabra</p>
                            <p className={classes["discount-price"]}> $100</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://oportoreef.pt/wp-content/uploads/2022/07/08360ZC-Zanclus20canescens20oportoreef-16.jpg"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Zanclus canescens</p>
                            <p className={classes["discount-price"]}> $120</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://reefsolution.com/cdn/shop/products/36caf884778b425dba4b5aafba0c2673.jpg?v=1618545464"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Cirrhilabrus linatus</p>
                            <p className={classes["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://www.freshnmarine.com/cdn/shop/products/371885.jpg?v=1470937504"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Balistoides conspicillum</p>
                            <p className={classes["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
                <li>
                    <article className={classes.card}>
                        <section className={classes["image-wrapper"]}>
                            <img src="https://www.monaconatureencyclopedia.com/wp-content/uploads/2008/08/1-Balistapus-undulatus-%C2%A9-Giuseppe-Mazza.jpg"
                                alt="reef-lobster" />
                            <div className={classes["discount-percent"]}>
                                <span>NEW</span>
                            </div>
                        </section>
                        <section className={classes["info-wrapper"]}>
                            <p>Balistapus undulatus</p>
                            <p className={classes["discount-price"]}> $130</p>
                            <button className="purple-btn">Add to Cart</button>
                        </section>
                    </article>
                </li>
            </ul>
        </section>)
}

export default Catalog;