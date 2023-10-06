import { NavLink, useNavigate } from "react-router-dom";
import classes from "./UpperNav.module.css";
import Search from "./search/Search";
import DropdownNav from "../dropdown navbar/DropdownNav";
import { useCookies } from "react-cookie";

function UpperNav({ scrollPosition }) {

    const [cookies, setCookies] = useCookies(["cart"]);

    const navigate = useNavigate();

    const scrolledDown = scrollPosition >= 265 ? true : false;
    const cart = cookies.cart;
    const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0)

    const onLogoClick = () => {
        navigate("/");
    }

    return (
        <nav className={classes["upper-nav"]} style={{ "height": scrolledDown ? "unset" : "17vh" }}>
            <div className="logo" onClick={onLogoClick}>
                <p style={{ "fontSize": scrolledDown ? "3rem" : "6rem" }}>NEMO's</p>
            </div>
            <Search />
            <div>
                <ul className={classes["user-div"]}>
                    <li>
                        < DropdownNav scrollPosition={scrollPosition} />
                    </li>
                    <li>
                        {scrolledDown ? <NavLink to="/login" className={({ isActive }) => isActive ? `${classes.active} ${classes.smaller}` : classes.smaller}><i className="fa-solid fa-user fa-lg"></i></NavLink> :
                            <NavLink to="/login" className={({ isActive }) => isActive ? classes.active : undefined} ><i className="fa-solid fa-user fa-xl"></i> <p>SignIn</p></NavLink>}
                    </li>
                    <li>
                        {scrolledDown ? <NavLink to="/cart" className={({ isActive }) => isActive ? `${classes.active} ${classes.smaller}` : classes.smaller}><i className="fa-solid fa-cart-shopping fa-lg"> <span className={classes["cart-item"]}>{itemCount}</span></i></NavLink> :
                            <NavLink to="/cart" className={({ isActive }) => isActive ? classes.active : undefined}><i className="fa-solid fa-cart-shopping fa-xl"><span className={classes["cart-item"]}>{itemCount}</span></i><p>Cart</p></NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default UpperNav;