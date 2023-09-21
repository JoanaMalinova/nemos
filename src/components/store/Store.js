import InnerNav from "../navigation/inner nav/InnerNav";
import Catalog from "../store/catalog/Catalog";
import HeadingSection from "../store/heading section/HeadingSection";
import classes from "./Store.module.css";

function Store({ currLink, imageUrl, items }) {

    return (
        <section className={classes.store} >
            <InnerNav currLink={currLink} />
            <HeadingSection heading={currLink} imageUrl={imageUrl} />
            <Catalog items={items} />
        </section>
    )
}

export default Store;