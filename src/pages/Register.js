import { json } from "react-router-dom";
import LoginDeals from "../components/login/login deals/LoginDeals";
import RegisterForm from "../components/login/register form/RegisterForm";
import { signUp } from "../services/authService";

function RegisterPage() {

    return (
        <>
            <RegisterForm />
            <LoginDeals />
        </>
    )
}

export default RegisterPage;

export const registerAction = async ({ request }) => {

    const data = await request.formData();

    const username = data.get("first-name") + " " + data.get("last-name");
    const email = data.get("email");
    const password = data.get("password");

    const user = await signUp(email, password, username);
    if (user.error) {

        throw json({ message: user.error }, { status: 401 });
    }

}