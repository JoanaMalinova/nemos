import styles from "./LowerNavbar.module.css";

export const LowerNav = () => {

    return (
        <nav className={styles["lower-nav"]}>
            <ul>
                <li>
                    <a href="">
                        <span>Store</span>
                        <img src="images/seashell.png" alt="open-clam" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Fish</span>
                        <img src="images/pngegg.png" alt="fish" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Invertebrate</span>
                        <img src="images/starfish.png" alt="starfish" />
                    </a>
                </li>
                <li>
                    <a href="">
                        <span>Coral</span>
                        <img src="images/Coral-Reef-PNG-Transparent-Image.png" alt="coral" />
                    </a>
                </li>
                <li><a href="">
                    <span>Decoration</span>
                    <img src="images/seashell-26412.png" alt="shell" />
                </a>
                </li>
            </ul>
        </nav>
    )
}


