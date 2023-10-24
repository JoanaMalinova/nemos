import classes from "../login form/LoginForm.module.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { userRegisterSchema } from "../../../utils/validationSchema";


function RegisterForm() {

    const initialValues = {
        "first-name": "",
        "last-name": "",
        email: "",
        password: "",
        newsletter: ""
    }

    const onRegisterSubmit = (values) => {
        console.log(values);
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
                    <Form method="POST">
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="first-name">First name</label>
                            <Field
                                type="text"
                                id="first-name"
                                name="first-name"
                                style={errors["first-name"] && touched["first-name"] ? errorStyle : null}
                                placeholder="Diana"
                            />
                            {errors["first-name"] && touched["first-name"] ?
                                <div className={classes["error-div"]}>{errors["first-name"]}</div> : null}
                        </div>
                        <div className={classes["input-wrapper"]}>
                            <label htmlFor="last-name">Last name</label>
                            <Field
                                type="text"
                                id="last-name"
                                name="last-name"
                                style={errors["last-name"] && touched["last-name"] ? errorStyle : null}
                                placeholder="Malinova"
                            />
                            {errors["last-name"] && touched["last-name"] ?
                                <div className={classes["error-div"]}>{errors["last-name"]}</div> : null}
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
                        <button type="submit">Sign up</button>
                        <p>Returning Customer? <Link to="/login">Sign in</Link></p>
                    </Form>
                )}
            </Formik>

        </div >
    )
}


export default RegisterForm;