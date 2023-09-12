import { useEffect } from "react"
import styles from "./Aside.module.css"

export const Aside = ({ scrollPosition }) => {

    const backgroundStyles = {
        shop: "none",
        "best-sellers": "none",
        dicount: " none",
        arrivals: "none"
    }

    // useEffect(() => {
    //     if (scrollPosition > 700 && scrollPosition < 1750) {
    //         backgroundStyles.shop = "#7645d8"
    //     } else {
    //         backgroundStyles.shop = "none"
    //     }

    // }, [scrollPosition])



    return (
        <aside>
            <ul>
                <li style={{ background: backgroundStyles.shop }}><a href="#shop"></a></li>
                <li><a href="#best-sellers"></a></li>
                <li><a href="#dicount"></a></li>
                <li><a href="#arrivals"></a></li>
            </ul>
        </aside>
    )
}