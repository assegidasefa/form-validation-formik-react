import React from "react";
import { Formik, Form } from 'formik'
import { Textfield } from "./Textfield";
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        firstname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastname: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })
    return (
        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmpassword: ""
            }}
            validationSchema={validate}
            onSubmit={values => {

                console.log(values)
            }
            }
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sign UP</h1>
                    {/* {console.log(formik.values)} */}
                    <Form>
                        <Textfield label="First Name" type="text" name="firstname" />
                        <Textfield label="Last Name" type="text" name="lastname" />
                        <Textfield label="Email" type="email" name="email" />
                        <Textfield label="Password" type="password" name="password" />
                        <Textfield label="Confirm Password" type="password" name="confirmpassword" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ms-3 " type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}