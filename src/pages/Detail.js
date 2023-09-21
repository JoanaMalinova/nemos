import Detail from "../components/detail/Detail";
import { getOne } from "../services/stroreService";

function DetailPage() {

    return (
        <Detail />
    )
}

export default DetailPage;

export const detailLoader = async ({ params }) => {
    return await getOne(params.itemId);
}      