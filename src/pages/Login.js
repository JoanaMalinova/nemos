import { json, redirect } from "react-router-dom";
import LoginDeals from "../components/login/login deals/LoginDeals";
import LoginForm from "../components/login/login form/LoginForm";
import { signIn } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import UserProfile from "../components/login/user profile/UserProfile";

function LoginPage({errorMessage}) {

    const user = useAuth();    

    return (
        <>
            {!user? <LoginForm message = {errorMessage} /> : <UserProfile user = {user}/>}            
            <LoginDeals />
        </>
    )
}

export default LoginPage;

export const loginAction = async ({ request }) => {

    const data = await request.json();   
    
    const user = await signIn(data.email, data.password);
    
    if (user.error) {       
         
        throw json({ message: user.error }, { status: 401 });
    }

    return redirect('/store');
}