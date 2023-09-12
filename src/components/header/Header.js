import { UpperNav } from "../navigation/upper navbar/UpperNav";
import { DropdownNav } from "../navigation/dropdown navbar/DropdownNav";
import styles from "./Header.module.css";

export const Header = ({ scrollPosition }) => {

    return (
        <header>
            <UpperNav scrollPosition={scrollPosition} />
            <DropdownNav scrollPosition={scrollPosition} />
        </header>
    )
}