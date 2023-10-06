import { useLoaderData } from "react-router-dom";
import classes from "./Popular.module.css";
import RelatedCard from "../../../detail/related items/card/RelatedCard";
import { useCookies } from "react-cookie";

function Popular() {

    const items = useLoaderData();
    const [cookies, setCookie] = useCookies(["cart"]);

    return (
        <section className={classes["popular-wrapper"]}>
            {items.map(item => <RelatedCard
                key={item.id}
                item={item}
                cart = {cookies.cart}
                setCookie={setCookie}
            />)}
        </section>
    )
}

export default Popular;