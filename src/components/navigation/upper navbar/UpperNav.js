import { NavLink, useNavigate } from "react-router-dom";
import styles from "./UpperNav.module.css";
import Search from "./search/Search";


function UpperNav({ scrollPosition }) {

    const navigate = useNavigate();

    const scrolledDown = scrollPosition >= 265 ? true : false;
    const onLogoClick = () => {
        navigate("/");
    }

    return (
        <nav className={styles["upper-nav"]} style={{ "height": scrolledDown ? "unset" : "17vh" }}>
            <div className="logo" onClick={onLogoClick}>
                <p style={{ "fontSize": scrolledDown ? "3rem" : "8rem" }}>NEMO's</p>
            </div>
            <Search />
            <div>
                <ul className={styles["user-div"]}>
                    <li>
                        {scrolledDown ? <NavLink to="/login" className={({ isActive }) => isActive ? `${styles.active} ${styles.smaller}` : styles.smaller}><i className="fa-solid fa-user fa-lg"></i></NavLink> :
                            <NavLink to="/login" className={({ isActive }) => isActive ? styles.active : undefined} ><i className="fa-solid fa-user fa-xl"></i> <p>SignIn</p></NavLink>}
                    </li>
                    <li>
                        {scrolledDown ? <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.active} ${styles.smaller}` : styles.smaller}><i className="fa-solid fa-cart-shopping fa-lg"></i></NavLink> :
                            <NavLink to="/cart" className={({ isActive }) => isActive ? styles.active : undefined}><i className="fa-solid fa-cart-shopping fa-xl"></i> <p>Cart</p></NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UpperNav;