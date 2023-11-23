import * as yup from "yup";

export const signInSchema = yup.object().shape({
    email: yup.string().required("Email Required").email("Invalid Email address")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid Email address"),
    password: yup.string().required("Password Required")
        .min(6, "Password must be at least 6 characters"),
});

export const signupSchema = yup.object().shape({
    // name: yup.string().required("Name Required")
    //   .min(4, "Name must be at least 4 characters"),
    email: yup.string().required("Email Required").email("Invalid email address")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email address"),
    password: yup.string().required("Password Required")
        .min(6, "Password must be at least 6 characters"),
    first_name: yup.string().required("First Name Required"),
    last_name: yup.string().required("Last Name Required"),
    phone_number: yup.string().required("Phone Required"),
    username: yup.string().required("Username Required"),
});