import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";
import { getAllFromType, getAllItems } from "../services/stroreService";
import { useLocation } from "react-router-dom";

function StorePage() {

    const { pathname } = useLocation();
    const type = pathname.substring(1);

    return (
        < Store currLink={storeInfo[type].name} imageUrl={storeInfo[type].imageUrl} />
    )
}

export default StorePage;

export const storeLoader = async () => {
    return await getAllItems();
}

export const storeByTypeLoader = async (type) => {
    return await getAllFromType(type);
};