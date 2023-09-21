import { useEffect } from "react";
import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";
import { getAllFromType } from "../services/stroreService";

function FishPage() {

    useEffect(() => {
        getAllFromType("fish")
            .then((fish) => {
                console.log(fish)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])

    return (
        < Store currLink={storeInfo.fish.name} imageUrl={storeInfo.fish.imageUrl} />
    )
}

export default FishPage;