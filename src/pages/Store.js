import Store from "../components/store/Store";
import storeInfo from "../utils/storeInfo";
import { getAllFromType, getAllItems } from "../services/stroreService";
import { useLocation, json } from "react-router-dom";

function StorePage() {

    const { pathname } = useLocation();
    let type = pathname.split("/")[1];

    return (
        < Store currLink={storeInfo[type].name} imageUrl={storeInfo[type].imageUrl} />
    )
}

export default StorePage;

export const storeLoader = async () => {

    try {
        const result = await getAllItems();
        return result;

    } catch (err) {

        throw json({ message: "Could not load store Items!" }, { status: 500 });
    }

}

export const storeByTypeLoader = async (type) => {
    try {
        const result = await getAllFromType(type);
        return result;

    } catch (err) {

        throw json({ message: `Could not load ${type} Items!` }, { status: 500 });
    }

};
