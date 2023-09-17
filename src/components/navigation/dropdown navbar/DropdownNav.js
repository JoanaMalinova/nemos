import { Link } from "react-router-dom";
import styles from "./Dropdown.module.css";

function DropdownNav({ scrollPosition }) {

    return (

        <div style={{ display: scrollPosition >= 265 ? "block" : "none" }} className={styles.dropdown}>
            <button className={styles["dropdown-btn"]}><i className="fa-solid fa-store"></i></button>
            <div className={styles["dropdown-content"]}>
                <Link to="/store">All</Link>
                <hr />
                <Link to="/fish">Fish</Link>
                <hr />
                <Link to="/invertebrate">Invertebrate</Link>
                <hr />
                <Link to="/coral">Coral</Link>
                <hr />
                <Link to="/decoration">Decoration</Link>
            </div>
        </div>
    )
}

export default DropdownNav;

