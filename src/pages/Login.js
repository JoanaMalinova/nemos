import LoginDeals from "../components/login/login deals/LoginDeals";
import LoginForm from "../components/login/login form/LoginForm";

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

    const loginData = {
        email: data.get("email"),
        password: data.get("password")
    }
}