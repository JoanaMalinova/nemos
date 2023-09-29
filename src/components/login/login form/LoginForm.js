import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";

function LoginForm() {

    return (
        <div className={classes["form-wrapper"]}>
            <h1>Customer Login</h1>
            <h4>Enter your email and password</h4>
            <form>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="id" />
                </div>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <p><a href="#">Forgot your password?</a></p>
                <button type="submit">Login</button>
                <p>New customer? <Link to="/register">Create an account</Link></p>
            </form>
        </div>
    )
}

export default LoginForm;