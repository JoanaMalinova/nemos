import { json, redirect } from "react-router-dom";
import LoginDeals from "../components/login/login deals/LoginDeals";
import RegisterForm from "../components/login/register form/RegisterForm";
import { signUp } from "../services/authService";

function RegisterPage({errorMessage}) {

    return (
        <>
            <RegisterForm message = {errorMessage} />
            <LoginDeals />
        </>
    )
}

export default RegisterPage;

export const registerAction = async ({ request }) => {

    const data = await request.json(); 

    const username = `${data.firstName.trim()} ${data.lastName.trim()}`;

    const user = await signUp(data.email.trim(), data.password.trim(), username);

    if (user.error) {

        throw json({ message: user.error }, { status: 401 });
    }
    return redirect('/store');
}