import Catalog from "../components/store/catalog/Catalog";
import Fuse from "fuse.js";
import { getAllItems } from "../services/stroreService";

function SearchPage() {

    return (
        <Catalog />
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
    const result = fuse.search(params.searchQuery).map(curr => curr.item);
    return result;
}
