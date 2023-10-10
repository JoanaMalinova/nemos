import HeaderKeeper from '../components/header/header keeper/HeaderKeeper';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Aside from '../components/navigation/aside navbar/Aside';
import LowerNav from '../components/navigation/lower navbar/LowerNav';
import { Outlet } from 'react-router-dom';
import { useLoading } from '../hooks/useLoading';
import Loader from '../components/special/loader/Loader';

function RootLayout() {

    const isLoading = useLoading();

    return (
        <>
            <HeaderKeeper />
            <Header />
            <LowerNav />
            <main style={isLoading ? { height: "30vh", background: "#90cde3" } : { height: "unset", background: "unset" }}>
                {isLoading ? <Loader /> : <Outlet />}
            </main>
            <Aside />
            <Footer />
        </>
    )
}

export default RootLayout;