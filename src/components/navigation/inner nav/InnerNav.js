import { Link } from "react-router-dom";
import classes from "./InnerNav.module.css"

function InnerNav({ currLink }) {
    return (
        <p className={classes["inner-nav"]}><Link to="/">Home</Link> <span>&gt;&gt;</span> <Link to={`/${currLink.toLowerCase()}`}>{currLink}</Link></p>
    )
}

export default InnerNav;