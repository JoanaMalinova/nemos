import { object, string } from 'yup';
const firstNameRules = /[a-zA-Z]/;
const lastNameRules = /[a-zA-Z]/;
const latinLettersLowerRules = /.*[a-z]{1,}/;
const latinLettersUpperRules = /.*([A-Z]){1,}/;
const specialCharsRules = /.*[!@#$&*]{1,}/;
const numberRules = /.*[0-9]{1,}/;

export const userRegisterSchema = object({
    firstName: string()
        .required("First name is required")
        .matches(firstNameRules, "Unallowed character")
        .min(2, "First name should be at least two letters long"),
    lastName: string()
        .required("Last name is required")
        .matches(lastNameRules, "Unallowed character")
        .min(2, "Last name should be at least two letters long"),
    email: string()
        .required("Email is required")
        .email("This does not look like an email!"),
    password: string()
        .required("Password is required")
        .min(8, "Password should be at least 8 characters long")
        .max(25, "Password should be no more than 25 characters long")
        .matches(latinLettersLowerRules, "Password should contain at least one latin letter in lowercase")
        .matches(latinLettersUpperRules, "Password should contain at least one latin letter in uppercase")
        .matches(numberRules, "Password should contain at least one number")
        .matches(specialCharsRules, "Password should contain at least one special character (!@#$&*)")
});

export const userLoginSchema = object({
    email: string().required("Email is required"),
    password: string().required("Password is required")
});