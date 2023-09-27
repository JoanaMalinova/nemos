import { getAllItems } from "../../../../services/stroreService";
import classes from "./Search.module.css";

function Search() {

    const onSearchSubmit = () => {

    }

    return (
        <form className={classes["search-form"]} onSubmit={onSearchSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" />
            <button type="submit" className={classes["search-btn"]}>
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            </button>
        </form>
    )
}

export default Search;