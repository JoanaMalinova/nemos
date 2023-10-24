import LowerFooter from "./lower section/LowerFooter"
import MiddleFooter from "./middle section/MiddleFooter"
import UpperFooter from "./upper section/UpperFooter"
import classes from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={classes["footer-wrapper"]}>
                < UpperFooter />
                < MiddleFooter />
            </div>
            < LowerFooter />
        </footer>
    )
}

export default Footer;