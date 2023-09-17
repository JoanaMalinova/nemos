import LowerFooter from "./lower section/LowerFooter"
import MiddleFooter from "./middle section/MiddleFooter"
import UpperFooter from "./upper section/UpperFooter"
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            < UpperFooter />
            < MiddleFooter />
            < LowerFooter />
        </footer>
    )
}

export default Footer;