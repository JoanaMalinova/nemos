import { Link } from "react-router-dom";
import classes from "./InnerNav.module.css"

function InnerNav({ currLink, itemName }) {
    return (
        <p className={classes["inner-nav"]} style={{ marginLeft: itemName ? "5vw" : "10vw" }}>
            <Link to="/">Home </Link>
            <span>&gt;&gt;</span>
            <Link to={`/${currLink.toLowerCase()}`}> {currLink} </Link>
            {itemName ? <><span >&gt;&gt;</span>
                <Link> {itemName}</Link></> : <></>}

        </p>
    )
}

export default InnerNav;