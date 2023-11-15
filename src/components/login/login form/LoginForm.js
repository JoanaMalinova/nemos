import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { userLoginSchema } from "../../../utils/validationSchema";
import { useSubmit } from "react-router-dom";

function LoginForm({ message }) {

    const submit = useSubmit();
    const initialValues = { email: "", password: "" };

    const onLoginSubmit = (values) => {
        submit(JSON.stringify(values), { method: "POST", encType: "application/json", action: "/login" });
    }

    const errorStyle = {
        border: "1px solid salmon",
        outline: "1px solid salmon"
    }

    return (
        <div className={classes["form-wrapper"]}>
            <h1>Customer Login</h1>
            <h4>Enter your email and password</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={userLoginSchema}
                onSubmit={onLoginSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                placeholder="didi@abv.bg"
                                style={errors.email && touched.email ? errorStyle : null}
                            />
                            {errors.email && touched.email ?
                                <div className={classes["error-div"]}>{errors.email}</div> : null}
                        </div>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="password">Password</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                autoComplete="on"
                                style={errors.password && touched.password ? errorStyle : null}
                            />
                            {errors.password && touched.password ?
                                <div className={classes["error-div"]}>{errors.password}</div> : null}
                        </div>
                        <p><a href="/reset-email">Forgot your password?</a></p>
                        {message && <div className={`${classes["error-div"]} ${classes.centered}`}>{message}</div>}
                        <button type="submit">Login</button>
                        <p>New customer? <Link to="/register">Create an account</Link></p>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default LoginForm;