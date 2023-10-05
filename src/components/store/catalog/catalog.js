import classes from "./Catalog.module.css";
import Card from "../card/Card";
import { useLoaderData, useParams } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import { useEffect, useState } from "react";
import { useFirstRender } from "../../../hooks/useFirstRender";
import { useCookies } from "react-cookie";

function Catalog() {

    const { pageNumber } = useParams();
    const items = useLoaderData();
    const [currPage, setCurrPage] = useState(1);
    const [firstItemIndex, setFirstItemIndex] = useState("");
    const [lastItemIndex, setLastItemIndex] = useState("");
    const [currentItems, setCurrentItems] = useState([]);
    const isFirstRender = useFirstRender();
    const [cookies, setCookie] = useCookies(['cart']);    

    useEffect(() => {       

        if (!isFirstRender) {
            window.scroll(0, 600);
        }

        if (pageNumber) {
            setCurrPage(Number(pageNumber));
        }

        const firstPageIndex = (currPage - 1) * 12;
        setFirstItemIndex(firstPageIndex + 1);
        const lastPageIndex = firstPageIndex + 12;
        setLastItemIndex(lastPageIndex);
        setCurrentItems(items.slice(firstPageIndex, lastPageIndex));

    }, [currPage]);


    return (
        <section className={classes["store-main"]}>
            <p>Showing {`${firstItemIndex} - ${currentItems.length < 12 ? currentItems.length : lastItemIndex}`} of {items.length} products</p>
            <ul className={classes["inner-store"]}>
                {currentItems.map(item => <Card item={item} key={item.id} setCookie={setCookie} cart={cookies.cart} />)}
            </ul>
            <Pagination
                currPage={currPage}
                totalCount={items.length}
                setCurrPage={setCurrPage}
            />
        </section>
    )
}

export default Catalog;