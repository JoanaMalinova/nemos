import { useRouteError } from "react-router-dom";
import HeaderKeeper from "../components/header/header keeper/HeaderKeeper";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LowerNav from "../components/navigation/lower navbar/LowerNav";
import ErrorContent from "../components/special/error content/ErrorContent";
import RegisterPage from "./Register";

function ErrorPage() {

    const error = useRouteError();

    let status = 404;
    let title = "Oops!Page not found";
    let message = "It looks like nothing was found at this location. Maybe try one of the links above or below or a search?"

    if (error.status === 500) {
        status = 500;
        title = "Oops! Something went wrong"
        message = error.data.message;
    } else if (error.status === 401) {
        status = 401;
        title = "Oops!"
        message = "Authorization failed!"
    }

    return (
        <>
            <HeaderKeeper />
            <Header />
            <LowerNav />
            <>
                {error.data.message === "Firebase: Error (auth/email-already-in-use)." ?
                    <RegisterPage errorMessage = {"Email is already in use"}></RegisterPage> :
                    <ErrorContent message={message} title={title} status={status} />}
            </>
            <Footer />
        </>

    )
}

export default ErrorPage;