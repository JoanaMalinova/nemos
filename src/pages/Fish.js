import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";

function FishPage() {

    return (
        < Store currLink={storeInfo.fish.name} imageUrl={storeInfo.fish.imageUrl} />
    )
}

export default FishPage;