import { json, redirect } from "react-router-dom";
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

    console.log("im in");

    const data = await request.json();
    console.log(data);   

    // const user = await signUp(data.email, data.password, data.username);
    // if (user.error) {

    //     throw json({ message: user.error }, { status: 401 });
    // }
    // return redirect('/store');
}