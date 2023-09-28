import { useParams } from "react-router-dom";
import classes from "./NoMatchesHeading.module.css";

function NoMatchesHeading() {

    const { searchQuery } = useParams();

    return (
        <div className={classes["heading-wrapper"]}>
            <h1>Sorry! No matches for <span className="white">{searchQuery}</span> ! Check out our most popular items:</h1>
            <hr />
        </div>
    )
}

export default NoMatchesHeading;