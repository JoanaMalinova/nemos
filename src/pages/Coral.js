import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";

function CoralPage() {
    return (
        < Store currLink={storeInfo.coral.name} imageUrl={storeInfo.coral.imageUrl} />
    )
}

export default CoralPage;