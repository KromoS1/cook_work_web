import {FormikProps, useFormik, withFormik} from "formik";
import React, {FC, memo} from "react";
import * as Yup from "yup";
import {Button, Checkbox, FormControlLabel, Paper, TextField} from "@material-ui/core";
import style from "./Registration.module.scss";

export interface ValuesRegistrationType {
    email: string
    password: string
    confirmPassword: string
    company: boolean
}

interface FormFormikProps {
    onSubmit: (formData: ValuesRegistrationType) => void
}

const Form: FC<FormFormikProps & FormikProps<ValuesRegistrationType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            email: props.initialValues.email,
            password: props.initialValues.password,
            confirmPassword: props.initialValues.confirmPassword,
            company: props.initialValues.company,
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Некорректный Email').required('Обязательное полу'),
            password: Yup.string().min(8, 'Пароль должен быть не менее 8 символов').required('Обязательное поле'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Пароли должны совпадать'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <Paper elevation={10} className={style.paper}>
            <form name={'registration'} onSubmit={formik.handleSubmit} className={style.form}>
                <h2 className={style.title}>Регистрация на CookWork</h2>
                <TextField label={"Email"}
                           {...formik.getFieldProps("email")}
                           error={formik.errors.email !== undefined}
                           helperText={formik.errors.email ? formik.errors.email : null}
                           variant={'outlined'}
                           className={style.field}/>
                <TextField label={"Пароль"}
                           type={"password"}
                           {...formik.getFieldProps("password")}
                           error={formik.errors.password !== undefined}
                           helperText={formik.errors.password ? formik.errors.password : null}
                           variant={'outlined'}
                           className={style.field}/>
                <TextField label={'Подтверждение пароля'}
                           type={"password"}
                           {...formik.getFieldProps('confirmPassword')}
                           error={formik.errors.confirmPassword !== undefined}
                           helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                           variant={'outlined'}
                           className={style.field}/>
                <div className={style.check}>
                    <span>Нажмите что бы создать аккаунт компании</span>
                    <FormControlLabel label={'Компания'} control={
                        <Checkbox color={"primary"} checked={formik.values.company}
                                  {...formik.getFieldProps("company")}/>}/>
                </div>
                <Button type="submit" variant={"contained"} color={"primary"} className={style.button}>
                    Зарегистироваться
                </Button>
            </form>
        </Paper>

    )
});

export const RegistrationForm = withFormik<FormFormikProps, ValuesRegistrationType>({
    mapPropsToValues: props => {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            company: false,
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
