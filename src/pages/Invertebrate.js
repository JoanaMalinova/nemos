import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";

function InvertebratePage() {

    return (
        < Store currLink={storeInfo.invertebrate.name} imageUrl={storeInfo.invertebrate.imageUrl} />
    )
}

export default InvertebratePage;