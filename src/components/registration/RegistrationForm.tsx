import {FormikProps, useFormik, withFormik} from "formik";
import React, {FC, memo} from "react";
import * as Yup from "yup";
import {Button, Paper, TextField} from "@material-ui/core";
import style from "./Registration.module.scss";


export interface ValuesRegistrationType {
    email: string
    password: string
    confirmPassword:string
    company:boolean
}

interface FormFormikProps {
    onSubmit: (formData: ValuesRegistrationType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesRegistrationType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            email:props.initialValues.email,
            password:props.initialValues.password,
            confirmPassword:props.initialValues.confirmPassword,
            company:props.initialValues.company,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(8, 'Must be 8 characters or more').required('Required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'registration'} onSubmit={formik.handleSubmit}>
            <Paper elevation={10}>
                <div className={style.container}>
                    <h2 className={style.title}>Registration to CookWork</h2>
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
                    <TextField label={formik.errors.confirmPassword ? 'Error' : 'Confirm Password'}
                               type={"password"}
                               {...formik.getFieldProps('confirmPassword')}
                               error={formik.errors.confirmPassword !== undefined}
                               helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                               variant={'outlined'}
                               className={style.field}/>
                    <Button type="submit" variant={"contained"} color={"primary"}>
                        Sign Up
                    </Button>
                </div>
            </Paper>
        </form>

    )
});

export const RegistrationForm = withFormik<FormFormikProps, ValuesRegistrationType>({
    mapPropsToValues: props => {
        return {
            email: '',
            password: '',
            confirmPassword:'',
            company:false,
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
