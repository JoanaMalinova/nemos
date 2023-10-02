import UpperNav from "../navigation/upper navbar/UpperNav";
import styles from "./Header.module.css";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

function Header() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const { pathname } = useLocation();

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
        </header>
    )
}

export default Header;