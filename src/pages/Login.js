import LoginDeals from "../components/login/login deals/LoginDeals";
import LoginForm from "../components/login/login form/LoginForm";
import { signIn } from "../services/authService";

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

    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");

    const user = await signIn(email, password);
    if (user.error) {

        throw json({ message: user.error }, { status: 401 });
    }

}