import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";

function StorePage() {

    return (
        < Store currLink={storeInfo.store.name} imageUrl={storeInfo.store.imageUrl} />
    )
}

export default StorePage;