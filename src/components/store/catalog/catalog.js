import classes from "./Catalog.module.css";
import Card from "../card/Card";
import { useLoaderData } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import { useEffect, useMemo, useState } from "react";
import NoMatchesFound from "./no matches found/NoMatchesFound";


function Catalog() {

    const items = useLoaderData();
    const [currPage, setcurrPage] = useState(1);
    const [firstItemIndex, setFirstItemIndex] = useState("");
    const [lastItemIndex, setLastItemIndex] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currPage])

    const currentItems = useMemo(() => {
        const firstPageIndex = (currPage - 1) * 12;
        setFirstItemIndex(firstPageIndex + 1);
        const lastPageIndex = firstPageIndex + 12;
        setLastItemIndex(lastPageIndex);
        return items.slice(firstPageIndex, lastPageIndex);
    }, [currPage]);

    const catalog = <section className={classes["store-main"]}>
        <p>Showing {`${firstItemIndex} - ${lastItemIndex}`} of {items.length} products</p>
        <ul className={classes["inner-store"]}>
            {currentItems.map(item => <Card item={item} key={item.id} />)}
        </ul>
        <Pagination
            currPage={currPage}
            totalCount={items.length}
            setcurrPage={setcurrPage}
        />
    </section>;

    const noMatches = <NoMatchesFound />;

    return (
        items.length ? catalog : noMatches
    )
}

export default Catalog;