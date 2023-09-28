import { getBestSellers } from "../services/homeService";
import Popular from "../components/special/no matches found/popular/Popular";
import NoMatchesHeading from "../components/special/no matches found/no matches heading/NoMatchesHeading";

function NoMatchesFound() {

    return (
        <>
            <NoMatchesHeading />
            <Popular />
        </>
    )
}

export default NoMatchesFound;

export const noMatchesLoader = async () => {
    return await getBestSellers();
}