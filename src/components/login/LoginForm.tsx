import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import style from "./Login.module.scss";
import {Button, Paper, TextField} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import * as Yup from 'yup';

export interface ValuesLoginType {
    email: string
    password: string
}

interface FormFormikProps {
    onSubmit: (formData: ValuesLoginType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesLoginType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            email:props.initialValues.email,
            password: props.initialValues.password,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'login'} onSubmit={formik.handleSubmit}>
            <Paper elevation={10}>
                <div className={style.container}>
                    <h2 className={style.title}>Sign In to CookWork</h2>
                    <TextField label={formik.errors.email ? "Error" : "Email"}
                               {...formik.getFieldProps("email")}
                               error={formik.errors.email !== undefined}
                               helperText={formik.errors.email ? formik.errors.email : null}
                               variant={'outlined'}
                               className={style.field}/>
                    <TextField label={formik.errors.password ? "Error" : "Password"}
                               type={"password"}
                               {...formik.getFieldProps("password")}
                               error={formik.errors.password !== undefined}
                               helperText={formik.errors.password ? formik.errors.password : null}
                               variant={'outlined'}
                               className={style.field}/>
                    <div className={style.forgot}>
                        <span>Forgot Password</span>
                    </div>
                    <Button type="submit" variant={"contained"} color={"primary"}>
                        Sign In
                    </Button>
                    <div className={style.linkRegistration}>
                        <span>Don't have an account?</span>
                        <NavLink to={"/registration"}>Sign Up</NavLink>
                    </div>
                </div>
            </Paper>
        </form>

    )
});


export const LoginForm = withFormik<FormFormikProps, ValuesLoginType>({
    mapPropsToValues: props => {
        return {
            email: '',
            password: '',
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
