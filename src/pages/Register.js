import LoginDeals from "../components/login/login deals/LoginDeals";
import RegisterForm from "../components/login/register form/RegisterForm";

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

    const registerData = {
        userName: data.get("first-name") + " " + data.get("last-name"),
        email: data.get("email"),
        password: data.get("password")
    }

}