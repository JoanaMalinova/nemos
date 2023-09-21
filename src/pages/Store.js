import { useLocation } from "react-router-dom";
import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";
import { useEffect, useState } from "react";
import { getAllFromType, getAllItems } from "../services/stroreService";


function StorePage() {

    const { pathname } = useLocation();
    const [items, setItems] = useState([]);
    const [type, setType] = useState("store");

    useEffect(() => {

        setType(pathname.substring(1));

        if (type === "store") {
            getAllItems()
                .then((items) => {
                    setItems(items);
                })
                .catch((err) => {
                    console.log(err)
                });

        } else {
            getAllFromType(type)
                .then((items) => {
                    setItems(items);
                })
                .catch((err) => {
                    console.log(err)
                });
        }

    }, [items, type, pathname])

    return (
        < Store currLink={storeInfo[type].name} imageUrl={storeInfo[type].imageUrl} items={items} />
    )
}

export default StorePage;