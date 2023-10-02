import { Link, NavLink } from "react-router-dom";
import classes from "./Dropdown.module.css";

function DropdownNav({ scrollPosition }) {

    return (

        <div style={{ display: scrollPosition >= 265 ? "block" : "none" }} className={classes.dropdown}>
            <NavLink to="/store" className={({ isActive }) => isActive ? `${classes.active } ${classes["store-link"]}` : classes["store-link"]}><i className="fa-solid fa-store fa-lg"></i></NavLink>
            <div className={classes["dropdown-content"]}>
                <Link to="/store" className={classes["dropdown-link"]}>All</Link>
                <hr />
                <Link to="/fish"className={classes["dropdown-link"]}>Fish</Link>
                <hr />
                <Link to="/invertebrate" className={classes["dropdown-link"]}>Invertebrate</Link>
                <hr />
                <Link to="/coral" className={classes["dropdown-link"]}>Coral</Link>
                <hr />
                <Link to="/decoration" className={classes["dropdown-link"]}>Decoration</Link>
            </div>
        </div>
    )
}

export default DropdownNav;

