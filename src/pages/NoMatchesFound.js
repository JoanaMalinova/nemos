import { getBestSellers } from "../services/homeService";
import Popular from "../components/special/no matches found/popular/Popular";
import SearchHeading from "../components/search/SearchHeading";

function NoMatchesFound() {

    return (
        <>
            <SearchHeading />
            <Popular />
        </>
    )
}

export default NoMatchesFound;

export const noMatchesLoader = async () => {
    return await getBestSellers();
}