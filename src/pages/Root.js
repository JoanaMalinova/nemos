import HeaderKeeper from '../components/header/header keeper/HeaderKeeper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Aside from '../components/navigation/aside navbar/Aside';
import LowerNav from '../components/navigation/lower navbar/LowerNav';

import { Outlet, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';

function RootLayout() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.scrollTo(0, 0)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    return (
        <>
            <HeaderKeeper />
            <Header scrollPosition={scrollPosition} />
            <main>
                <LowerNav />
                <Outlet />
            </main>
            <Aside scrollPosition={scrollPosition} />
            <Footer />
        </>
    )
}

export default RootLayout;