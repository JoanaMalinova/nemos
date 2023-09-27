import { useState } from "react";
import classes from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search() {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const onSearhInputChange = (ev) => {
        setSearchQuery(ev.target.value);
    }

    const onSearchSubmit = async (ev) => {

        ev.preventDefault();
        if (searchQuery === "") {
            return
        }

        navigate(`/search/${searchQuery}`);
        setSearchQuery("");
    }

    return (
        <form className={classes["search-form"]} onSubmit={onSearchSubmit}>
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" onChange={onSearhInputChange} value={searchQuery} />
            <button type="submit" className={classes["search-btn"]}>
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
            </button>
        </form>
    )
}

export default Search;