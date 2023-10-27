import styles from "./Discount.module.css";
import { useRef, useState, useEffect } from "react";
import DiscountCard from "./discount card/DiscountCard";
import { useLoaderData } from "react-router-dom";
import { useCookies } from "react-cookie";

function Discount() {

    const { discountItems } = useLoaderData();
    const carousel = useRef();
    const [element, setElement] = useState("");
    const [cookies, setCookie] = useCookies("cart");

    useEffect(() => {
        setElement(carousel.current);

    }, [])

    const Flickity = require("flickity");

    if (element) {
        const flkty = new Flickity(element, {
            "autoPlay": true,
            "freeScroll": true,
            "wrapAround": true
        });
    }

    return (
        <section id="dicount" className={styles["discounts"]}>
            <div className={styles["discount-wrapper"]}>
                <h2 className={styles["discount-header"]}>Weekly offers</h2>
                <hr />
                <ul className="carousel" ref={carousel} >
                    {discountItems.map(item => <DiscountCard
                        key={item.id}
                        item={item}
                        setCookie={setCookie}
                        cart={cookies.cart}
                    />)}
                </ul>
            </div>
        </section>
    )
}

export default Discount;