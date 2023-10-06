import { useLoaderData } from "react-router-dom";
import classes from "./RelatedItems.module.css";
import RelatedCard from "./card/RelatedCard";
import { useEffect, useState } from "react";
import getRandomIndex from "../../../utils/getRandomIndex";

function RelatedItems({ cookies, setCookie }) {

    const { item, items } = useLoaderData();
    const [selectedItems, setSelectedItems] = useState([]);
    const [myItem, setMyItem] = useState("");

    useEffect(() => {

        setMyItem(item);
        const currItems = [];
        const workItems = items.filter(el => el.id !== myItem.id);
        for (let i = 1; i <= 4; i++) {
            const workIndex = getRandomIndex(workItems.length);
            if (currItems.includes(workItems[workIndex])) {
                i -= 1;
            } else {
                currItems.push(workItems[workIndex]);
            }
        }
        setSelectedItems(currItems);

    }, [myItem, item]);

    return (
        <section className={classes["related-items"]}>
            <h2>You May ALso Like</h2>
            <div className={classes["inner-wrapper"]}>
                {selectedItems.map(item => <RelatedCard
                    key={item.id}
                    item={item}
                    setCookie={setCookie}
                    cart={cookies.cart}
                />)}
            </div>
        </section>
    )
}

export default RelatedItems;