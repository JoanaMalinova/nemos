import { useState } from "react";
import classes from "./Search.module.css";
import { useNavigate } from "react-router-dom";

function Search({ searchDisplay }) {

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
        <form
            className={classes["search-form"]}
            onSubmit={onSearchSubmit}
            style={searchDisplay && { display: searchDisplay, width: "90%", margin: "0px auto 15px" }}
        >
            <label htmlFor="search"></label>
            <input
                type="text"
                name="search"
                id="search"
                onChange={onSearhInputChange}
                value={searchQuery}
                style={searchDisplay && { width: "100%", height: "44px", fontSize: "1.4rem" }}
            />
            <button type="submit" className={classes["search-btn"]}>
                <i
                    className="fa-solid fa-magnifying-glass fa-xl"
                    style={searchDisplay && { fontSize: "2rem" }}
                ></i>
            </button>
        </form>
    )
}

export default Search;