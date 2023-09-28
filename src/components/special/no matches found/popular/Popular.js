import { useLoaderData } from "react-router-dom";
import classes from "./Popular.module.css";
import RelatedCard from "../../../detail/related items/card/RelatedCard";

function Popular() {

    const items = useLoaderData();

    return (
        <section className={classes["popular-wrapper"]}>
            {items.map(item => <RelatedCard key={item.id} item={item} />)}
        </section>
    )
}

export default Popular;