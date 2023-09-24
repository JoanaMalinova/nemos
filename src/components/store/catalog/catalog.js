import classes from "./Catalog.module.css";
import Card from "../card/Card";
import { useLoaderData } from "react-router-dom";

function Catalog() {

    const items = useLoaderData();

    return (
        <section className={classes["store-main"]}>
            <p>Showing 1 - 12 of {items.length} products</p>
            <ul className={classes["inner-store"]}>
                {items ? items.map(item => <Card item={item} key={item.id} />) : <></>}
            </ul>
            <a className={classes.pagination}>1</a>
        </section>)
}

export default Catalog;