import styles from "./Aside.module.css"
import { useLocation } from "react-router-dom"

function Aside() {

    const location = useLocation();

    const backgroundStyles = {
        shop: "none",
        "best-sellers": "none",
        dicount: " none",
        arrivals: "none"
    }


    return (
        <aside style={{ "display": location.pathname === "/" ? "block" : "none" }}>
            <ul>
                <li style={{ background: backgroundStyles.shop }}><a href="#shop"></a></li>
                <li><a href="#best-sellers"></a></li>
                <li><a href="#dicount"></a></li>
                <li><a href="#arrivals"></a></li>
            </ul>
        </aside>
    )
}

export default Aside;