import styles from "./UpperNav.module.css"

export const UpperNav = () => {

    return (
        <nav className={styles["upper-nav"]}>
            <div className="logo">
                <p>NEMO's</p>
            </div>
            <form method="POST">
                <label for="search"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
                <input type="text" name="search" id="search" />
            </form>
            <div>
                <ul className={styles["user-div"]}>
                    <li>
                        <a href=""><i className="fa-solid fa-user fa-2xl"></i></a>
                    </li>
                    <li>
                        <a href=""><i className="fa-solid fa-cart-shopping fa-2xl"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}