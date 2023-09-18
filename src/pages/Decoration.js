import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";

function DecorationPage() {

    return (
        < Store currLink={storeInfo.decoration.name} imageUrl={storeInfo.decoration.imageUrl} />
    )

}

export default DecorationPage;