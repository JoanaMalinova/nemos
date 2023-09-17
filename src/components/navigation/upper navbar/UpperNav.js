import { Link, useNavigate } from "react-router-dom";
import styles from "./UpperNav.module.css";


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
            <form method="POST">
                <label htmlFor="search"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
                <input type="text" name="search" id="search" />
            </form>
            <div>
                <ul className={styles["user-div"]}>
                    <li>
                        {scrolledDown ? <Link to="/login" style={{ height: "unset" }}><i className="fa-solid fa-user fa-xl"></i></Link> :
                            <Link to="/login" style={{ height: "10vw" }} ><i className="fa-solid fa-user fa-2xl"></i></Link>}
                    </li>
                    <li>
                        {scrolledDown ? <Link to="/cart" style={{ height: "unset" }} ><i className="fa-solid fa-cart-shopping fa-xl"></i></Link> :
                            <Link to="/cart" style={{ height: "10vw" }} ><i className="fa-solid fa-cart-shopping fa-2xl"></i></Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UpperNav;