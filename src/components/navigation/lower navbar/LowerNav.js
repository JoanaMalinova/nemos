import { NavLink } from "react-router-dom";
import styles from "./LowerNavbar.module.css";

function LowerNav() {

    return (
        <nav className={styles["lower-nav"]}>
            <ul>
                <li>
                    <NavLink to="/store" className={({ isActive }) => isActive ? styles.active : undefined} end>
                        <span>Store</span>
                        <img src="images/seashell.png" alt="open-clam" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/fish" className={({ isActive }) => isActive ? styles.active : undefined}>
                        <span>Fish</span>
                        <img src="images/pngegg.png" alt="fish" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/invertebrate" className={({ isActive }) => isActive ? styles.active : undefined}>
                        <span>Invertebrate</span>
                        <img src="images/starfish.png" alt="starfish" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/coral" className={({ isActive }) => isActive ? styles.active : undefined}>
                        <span>Coral</span>
                        <img src="images/Coral-Reef-PNG-Transparent-Image.png" alt="coral" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/decoration" className={({ isActive }) => isActive ? styles.active : undefined}>
                        <span>Decoration</span>
                        <img src="images/seashell-26412.png" alt="shell" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default LowerNav;

