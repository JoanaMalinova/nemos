import { NavLink, useNavigate } from "react-router-dom";
import classes from "./UpperNav.module.css";
import Search from "./search/Search";
import DropdownNav from "../dropdown navbar/DropdownNav";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import LeftDrawer from "../left drawer/LeftDrawer";

function UpperNav({ scrollPosition }) {

    const [cookies, setCookies] = useCookies(["cart"]);
    const [state, setState] = useState({ left: false });
    const [searchDisplay, setSearchDisplay] = useState("none");
    const matches = useMediaQuery("screen and (max-width:500px)");
    const navigate = useNavigate();

    const scrolledDown = scrollPosition >= 265 ? true : false;
    const cart = cookies.cart;
    const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0)

    const onLogoClick = () => {
        navigate("/");
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ [anchor]: open });
    };

    const onSearchClick = () => {

        if (searchDisplay === "none") {
            setSearchDisplay("block");
        } else {
            setSearchDisplay("none");
        }
    }


    return (
        <>
            <nav className={classes["upper-nav"]} style={{ "height": scrolledDown ? "unset" : "17vh" }}>
                <div className="logo" onClick={onLogoClick}>
                    <p style={{ "fontSize": scrolledDown ? "3rem" : "6rem" }}>NEMO's</p>
                </div>
                {!matches && <Search />}
                <div>
                    <ul className={classes["user-div"]}>
                        {matches &&
                            <button className={classes["search-bttn"]} onClick={onSearchClick}>
                                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                            </button>}
                        <li>
                            {matches ?
                                <button className={classes["search-bttn"]}
                                    onClick={toggleDrawer("left", true)}
                                >
                                    <i className="fa-solid fa-store fa-lg"></i>
                                </button> :
                                < DropdownNav scrollPosition={scrollPosition} matches={matches} />
                            }

                        </li>
                        <li>
                            {matches ? <NavLink to="/login" ><i className="fa-solid fa-user fa-lg"></i></NavLink> :
                                (scrolledDown ? <NavLink to="/login" className={({ isActive }) => isActive ? `${classes.active} ${classes.smaller}` : classes.smaller}><i className="fa-solid fa-user fa-lg"></i></NavLink> :
                                    <NavLink to="/login" className={({ isActive }) => isActive ? classes.active : undefined} ><i className="fa-solid fa-user fa-xl"></i> <p>SignIn</p></NavLink>)}

                        </li>
                        <li>
                            {matches ? <NavLink to="/cart"><i className="fa-solid fa-cart-shopping fa-lg"><span className={classes["cart-item"]}>{itemCount}</span></i></NavLink> :
                                (scrolledDown ? <NavLink to="/cart" className={({ isActive }) => isActive ? `${classes.active} ${classes.smaller}` : classes.smaller}><i className="fa-solid fa-cart-shopping fa-lg"> <span className={classes["cart-item"]}>{itemCount}</span></i></NavLink> :
                                    <NavLink to="/cart" className={({ isActive }) => isActive ? classes.active : undefined}><i className="fa-solid fa-cart-shopping fa-xl"><span className={classes["cart-item"]}>{itemCount}</span></i><p>Cart</p></NavLink>)}
                        </li>
                    </ul>
                </div>
                {matches &&
                    <LeftDrawer toggleDrawer={toggleDrawer} state={state} />}
            </nav>
            {matches &&
                <Search searchDisplay={searchDisplay} />}
        </>

    )
}

export default UpperNav;