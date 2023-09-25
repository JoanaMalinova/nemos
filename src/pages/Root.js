import HeaderKeeper from '../components/header/header keeper/HeaderKeeper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Aside from '../components/navigation/aside navbar/Aside';
import LowerNav from '../components/navigation/lower navbar/LowerNav';
import { Outlet } from 'react-router-dom';

function RootLayout() {

    return (
        <>
            <HeaderKeeper />
            <Header />
            <main>
                <LowerNav />
                <Outlet />
            </main>
            <Aside />
            <Footer />
        </>
    )
}

export default RootLayout;