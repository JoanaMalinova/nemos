import UpperNav from "../navigation/upper navbar/UpperNav";
import styles from "./Header.module.css";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import TextUs from "../special/text us/TextUs";
import { useMediaQuery } from "@mui/material";

function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const { pathname } = useLocation();
    const matches = useMediaQuery("max-width:700px");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };


    return (
        <header>
            <UpperNav scrollPosition={scrollPosition} />
            <TextUs />
        </header>
    )
}

export default Header;