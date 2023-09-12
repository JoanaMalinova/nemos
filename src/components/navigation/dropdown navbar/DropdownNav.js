import styles from "./Dropdown.module.css"

export const DropdownNav = ({ scrollPosition }) => {
    return (

        <div style={{ display: scrollPosition >= 265 ? "block" : "none" }} className={styles.dropdown}>
            <button className={styles["dropdown-btn"]}><i className="fa-solid fa-store"></i></button>
            <div className={styles["dropdown-content"]}>
                <a href="">All</a>
                <hr />
                <a href="">Fish</a>
                <hr />
                <a href="">Invertebrate</a>
                <hr />
                <a href="">Coral</a>
                <hr />
                <a href="">Decoration</a>
            </div>
        </div>

    )
}

