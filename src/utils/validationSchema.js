import { object, string } from 'yup';

const passwordRules = /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,25}$/;
const firstNameRules = /[a-zA-Z]/;
const lastNameRules = /[a-zA-Z]/;

export const userRegisterSchema = object({
    "first-name": string().required("Password is required").matches(firstNameRules, "Unallowed character").min(2, "First name should be at least two letters long"),
    "last-name": string().required("Password is required").matches(lastNameRules, "Unallowed character").min(2, "Last name should be at least two letters long"),
    email: string().email("This does not look like an email!").required("Email is required"),
    password: string().required("Password is required").matches(passwordRules, "Password is not strong enough")
});

export const userLoginSchema = object({
    email: string().required("Email is required"),
    password: string().required("Password is required")
});