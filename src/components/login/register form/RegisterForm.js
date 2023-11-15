import classes from "../login form/LoginForm.module.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { userRegisterSchema } from "../../../utils/validationSchema";
import { useSubmit } from "react-router-dom";


function RegisterForm({ message }) {

    const submit = useSubmit();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        newsletter: ""
    }

    const onRegisterSubmit = (values) => {
        submit(JSON.stringify(values), { method: "POST", encType: "application/json", action: "/register" });
    }

    const errorStyle = {
        border: "1px solid salmon",
        outline: "1px solid salmon"
    }

    return (
        <div className={classes["form-wrapper"]} >
            <h1>Create my account</h1>
            <h4>Please fill in the information below:</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={userRegisterSchema}
                onSubmit={onRegisterSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="firstName">First name</label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                style={errors["firstName"] && touched["firstName"] ? errorStyle : null}
                                placeholder="Diana"
                            />
                            {errors["firstName"] && touched["firstName"] ?
                                <div className={classes["error-div"]}>{errors["firstName"]}</div> : null}
                        </div>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="lastName">Last name</label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                style={errors["lastName"] && touched["lastName"] ? errorStyle : null}
                                placeholder="Malinova"
                            />
                            {errors["lastName"] && touched["lastName"] ?
                                <div className={classes["error-div"]}>{errors["lastName"]}</div> : null}
                        </div>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                id="email"
                                name="email"
                                style={errors.email && touched.email ? errorStyle : null}
                                placeholder="didi@abv.bg"
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
                                autoComplete="on"
                                style={errors.password && touched.password ? errorStyle : null}
                                placeholder="**********"
                            />
                            {errors.password && touched.password ?
                                <div className={classes["error-div"]}>{errors.password}</div> : null}
                        </div>
                        <div>
                            <Field type="checkbox" id="newsletter" name="newsletter" value="subscribed" />
                            <label htmlFor="newsletter">Subscribe to our newsletter?</label>
                        </div>
                        {message && <div className={`${classes["error-div"]} ${classes.centered}`}>{message}</div>}
                        <button type="submit">Sign up</button>
                        <p>Returning Customer? <Link to="/login">Sign in</Link></p>
                    </Form>
                )}
            </Formik>

        </div >
    )
}


export default RegisterForm;