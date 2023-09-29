import classes from "../login form/LoginForm.module.css";
import { Link } from "react-router-dom";

function RegisterForm() {

    return (
        <div className={classes["form-wrapper"]} >
            <h1>Create my account</h1>
            <h4>Please fill in the information below:</h4>
            <form>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="first-name">First name</label>
                    <input type="text" id="first-name" name="first-name" />
                </div>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="last-name">Last name</label>
                    <input type="text" id="last-name" name="last-name" />
                </div>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="id" />
                </div>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div>
                    <input type="checkbox" id="newsletter" name="newsletter" value="subscribed" />
                    <label htmlFor="newsletter">Subscribe to our newsletter?</label>
                </div>
                <button type="submit">Sign up</button>
                <p>Returning Customer? <Link to="/login">Sign in</Link></p>
            </form>
        </div >
    )
}


export default RegisterForm;