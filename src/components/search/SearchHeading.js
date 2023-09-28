import { useLocation, useParams } from "react-router-dom";
import classes from "./SearchHeading.module.css";

function SearchHeading({ length }) {

    const { searchQuery } = useParams();
    const { pathname } = useLocation();

    return (
        <div
            className={classes["heading-wrapper"]}
            style={{ "padding-bottom": pathname.includes("no-matches") ? "7vh" : "0" }}
        >
            {
                pathname.includes("no-matches") ?
                    <h1>Sorry! No matches for <span className="white">"{searchQuery}"</span> ! Check out our most popular items:</h1> :
                    <h1><span className="bold">{length}</span> matches found for <span className="white">"{searchQuery}"</span>:</h1>
            }
            <hr />
        </div>
    )
}

export default SearchHeading;