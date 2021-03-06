import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import style from "./Login.module.scss";
import {Button, Checkbox, FormControlLabel, Paper, TextField} from "@material-ui/core";
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
            email: props.initialValues.email,
            password: props.initialValues.password,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Некорректный Email').required('Обязательное поле'),
            password: Yup.string().min(8, 'Пароль должен быть не менее 8 символов').required('Обязательное поле'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'login'} onSubmit={formik.handleSubmit}>
            <Paper elevation={10}>
                <div className={style.container}>
                    <h2 className={style.title}>Войти на CookWork</h2>
                    <TextField label={formik.errors.email ? "Ошибка" : "Email"}
                               {...formik.getFieldProps("email")}
                               error={formik.errors.email !== undefined}
                               helperText={formik.errors.email ? formik.errors.email : null}
                               variant={'outlined'}
                               className={style.field}/>
                    <TextField label={formik.errors.password ? "Ошибка" : "Пароль"}
                               type={"password"}
                               {...formik.getFieldProps("password")}
                               error={formik.errors.password !== undefined}
                               helperText={formik.errors.password ? formik.errors.password : null}
                               variant={'outlined'}
                               className={style.field}/>
                    <div className={style.forgot}>
                        <span>Забыли пароль</span>
                    </div>
                    <Button type="submit" variant={"contained"} color={"primary"}>
                        Войти
                    </Button>
                    <div className={style.linkRegistration}>
                        <span>Нет аккаунта?</span>
                        <NavLink to={"/registration"}>Зарегистироваться</NavLink>
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
