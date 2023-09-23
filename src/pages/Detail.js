import { json } from "react-router-dom";
import Detail from "../components/detail/Detail";
import { getAllFromType, getOne } from "../services/stroreService";

function DetailPage() {

    return (
        <Detail />
    )
}

export default DetailPage;

export const detailLoader = async ({ params }) => {
    const [item, items] = await Promise.all([getOne(params.itemId), getAllFromType(params.storeName)]);

    return json({ item, items });
}
