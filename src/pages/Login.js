import { json, redirect } from "react-router-dom";
import LoginDeals from "../components/login/login deals/LoginDeals";
import LoginForm from "../components/login/login form/LoginForm";
import { signIn } from "../services/authService";
import { userLoginSchema } from "../utils/validationSchema";

function LoginPage() {

    return (
        <>
            <LoginForm />
            <LoginDeals />
        </>
    )
}

export default LoginPage;

export const loginAction = async ({ request }) => {
    console.log("im in")

    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");
    const something = await userLoginSchema.validate({ email, password });
    console.log(something);

    // const user = await signIn(email, password);
    // if (user.error) {
    //     console.log(user.error)
    //     throw json({ message: user.error }, { status: 401 });
    // }

    // return redirect('/store');

}