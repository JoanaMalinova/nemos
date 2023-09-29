import classes from "../login form/LoginForm.module.css";

function EmailResetForm() {
    return (
        <div className={classes["form-wrapper"]}>
            <h1>Reset Email </h1>
            <h4>Enter your email</h4>
            <form>
                <div className={classes["input-wrapper"]}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <p>We will send you an email to reset your password.</p>
                <button type="submit">Submit</button>
                <p>Remembered your password?<a href="/login">Back to login </a></p>
            </form>
        </div>
    )
}

export default EmailResetForm;