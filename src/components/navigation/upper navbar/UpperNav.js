import styles from "./UpperNav.module.css"

export const UpperNav = ({ scrollPosition }) => {

    const scrolledDown = scrollPosition >= 265 ? true : false;

    return (
        <nav className={styles["upper-nav"]} style={{ "height": scrolledDown ? "unset" : "17vh" }}>
            <div className="logo">
                <p style={{ "fontSize": scrolledDown ? "3rem" : "8rem" }}>NEMO's</p>
            </div>
            <form method="POST">
                <label htmlFor="search"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
                <input type="text" name="search" id="search" />
            </form>
            <div>
                <ul className={styles["user-div"]}>
                    <li>
                        <a style={{ height: scrolledDown ? "unset" : "10vw" }} href=""><i className="fa-solid fa-user fa-2xl"></i></a>
                    </li>
                    <li>
                        <a style={{ height: scrolledDown ? "unset" : "10vw" }} href=""><i className="fa-solid fa-cart-shopping fa-2xl"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}