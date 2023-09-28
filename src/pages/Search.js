import Catalog from "../components/store/catalog/Catalog";
import Fuse from "fuse.js";
import { getAllItems } from "../services/stroreService";
import { Navigate, useLoaderData, useParams } from "react-router-dom";

function SearchPage() {

    const items = useLoaderData();
    const { searchQuery } = useParams()

    return (
        <>
            {items === "No matches found!" ?
                <Navigate to={`/search/${searchQuery}/no-matches`} replace="true" /> :
                <Catalog />
            }
        </>
    )
}

export default SearchPage;

export const searchLoader = async ({ params }) => {

    const searchQuery = params.searchQuery;

    const allItems = await getAllItems();

    const fuseOptions = {
        includeScore: true,
        minMatchCharLength: searchQuery.length,
        keys: ["type", "species", "name"]
    };

    const fuse = new Fuse(allItems, fuseOptions);

    let result = fuse.search(params.searchQuery).map(curr => curr.item);

    if (!result.length) {
        result = "No matches found!";
    }

    return result;
}
