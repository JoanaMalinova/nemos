import { defer } from "react-router-dom";
import Detail from "../components/detail/Detail";
import { getAllFromType, getOne } from "../services/stroreService";

function DetailPage() {

    return (
        <Detail />
    )
}

export default DetailPage;


export const detailLoader = async ({ params }) => {

    const item = await getOne(params.itemId);
    const items =await getAllFromType(params.storeName);

    return defer({
        item: await item,
        items
    })
}
