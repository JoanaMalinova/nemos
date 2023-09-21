import classes from "./Catalog.module.css";
import Card from "../card/Card";

function Catalog({ items }) {

    return (
        <section className={classes["store-main"]}>
            <p>Showing 1 - 48 of 74 products</p>
            <ul className={classes["inner-store"]}>
                {items ? items.map(item => <Card item={item} key={item.id} />) : <></>}
            </ul>
            <a className={classes.pagination}>1</a>
        </section>)
}

export default Catalog;