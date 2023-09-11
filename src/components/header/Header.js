import { UpperNav } from "../navigation/upper navbar/UpperNav";
import { LowerNav } from "./navigation/lower navigation/LowerNav";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <header>
            <UpperNav />
            <LowerNav />
        </header>
    )
}