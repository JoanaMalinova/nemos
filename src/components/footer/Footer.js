import { LowerFooter } from "./lower section/LowerFooter"
import { MiddleFooter } from "./middle section/MiddleFooter"
import { UpperFooter } from "./upper section/UpperFooter"


export const Footer = () => {
    return (
        <footer>
            < UpperFooter />
            < MiddleFooter />
            < LowerFooter />
        </footer>
    )
}