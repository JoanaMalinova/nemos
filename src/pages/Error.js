import { useRouteError } from "react-router-dom";
import HeaderKeeper from "../components/header/header keeper/HeaderKeeper";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LowerNav from "../components/navigation/lower navbar/LowerNav";

function ErrorPage() {

    const error = useRouteError();

    let status = 404;
    let title = "Oops!Page not found";
    let message = "It looks like nothing was found at this location. Maybe try one of the links above or below or a search?"

    if (error.status === 500) {
        status = 500
        title = "Oops! Something went wrong"
        message = error.data.message;
    }

    return (
        <>
            <HeaderKeeper />
            <Header />
            <LowerNav />
            <div className="error-wrapper blueviolet">
                <img src="images/Dory-PNG-Isolated-Pic.png" alt="doryAndMarlin" />
                <div className="inner-error">
                    <p>{status}</p>
                    <h1 >{title}</h1>
                    <hr />
                    <h2>{message}</h2>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ErrorPage;