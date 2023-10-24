import styles from "./Aside.module.css"
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";


function Aside() {

    const location = useLocation();
    const matches = useMediaQuery("screen and (max-width:500px)");

    const backgroundStyles = {
        shop: "none",
        "best-sellers": "none",
        dicount: " none",
        arrivals: "none"
    }


    return (
        <aside style={{ "display": location.pathname === "/" && !matches ? "block" : "none" }}>
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