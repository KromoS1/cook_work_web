import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import style from "./Login.module.scss";
import {Button, Paper, TextField} from "@material-ui/core";
import * as Yup from 'yup';

export interface ValuesType {
    email: string
    password: string
}

interface FormFormikProps {
    onSubmit: (formData: ValuesType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(8,'Must be 8 characters or more').required('Required'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return(
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
                    <Button type="submit" variant={"outlined"} color={"primary"}>
                        Login
                    </Button>
                </div>
            </Paper>
        </form>

    )
});


export const LoginForm = withFormik<FormFormikProps, ValuesType>({
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
