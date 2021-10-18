import React, {FC, memo} from "react";
import {FormikProps, useFormik, withFormik} from "formik";
import style from './UserAccount.module.scss';
import {Button, TextField} from "@material-ui/core";
import * as Yup from 'yup';
import {UserAccountType} from "../../../store/reducers/UserAccountReducer";
import {Autocomplete, InputAdornment} from "@mui/material";
import city from '../../../location/by-cities.json';

interface FormFormikProps {
    user: UserAccountType
    onSubmit: (formData: UserAccountType) => void
}

const Form: FC<FormFormikProps & FormikProps<UserAccountType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            firstName: props.initialValues.firstName,
            name: props.initialValues.name,
            dateOfBirth: props.initialValues.dateOfBirth,
            city: props.initialValues.city,
            numberPhone: props.initialValues.numberPhone,
            email: props.initialValues.email,
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required('Обязательное поле.'),
            name: Yup.string().required('Обязательное поле.'),
            email: Yup.string().email('Invalid email').required('Обязательное поле'),
            numberPhone: Yup.number().required('Обязательное поле'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'userAccount'} onSubmit={formik.handleSubmit} className={style.form}>
            <TextField label={formik.errors.firstName ? "Ошибка" : "Фамилия"}
                       {...formik.getFieldProps("firstName")}
                       error={formik.errors.firstName !== undefined}
                       helperText={formik.errors.firstName ? formik.errors.firstName : null}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={formik.errors.name ? "Ошибка" : "Имя"}
                       {...formik.getFieldProps("name")}
                       error={formik.errors.name !== undefined}
                       helperText={formik.errors.name ? formik.errors.name : null}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField type={"date"}
                       label={formik.errors.dateOfBirth ? "Ошибка" : ''}
                       {...formik.getFieldProps("dateOfBirth")}
                       variant={'outlined'}
                       className={style.field}/>
            <Autocomplete className={style.field} freeSolo options={city.map((option) => option.name)}
                          renderInput={(params) =>
                              <TextField {...params}
                                         label={formik.errors.city ? "Ошибка" : "Место жительства"}
                                         {...formik.getFieldProps("city")}
                                         variant={'outlined'}/>}/>
            <TextField label={formik.errors.email ? "Ошибка" : "Email"}
                       {...formik.getFieldProps("email")}
                       error={formik.errors.email !== undefined}
                       helperText={formik.errors.email ? formik.errors.email : null}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={formik.errors.numberPhone ? "Ошибка" : "Номер телефона"}
                       {...formik.getFieldProps("numberPhone")}
                       error={formik.errors.numberPhone !== undefined}
                       helperText={formik.errors.numberPhone ? formik.errors.numberPhone : null}
                       variant={'outlined'}
                       InputProps={{
                           startAdornment: <InputAdornment position="start">+375</InputAdornment>,
                       }}
                       className={style.field}/>
            <Button type="submit" variant={"contained"} color={"primary"}>
                Сохранить
            </Button>
        </form>
    )
});


export const UserAccountForm = withFormik<FormFormikProps, UserAccountType>({
    mapPropsToValues: props => {
        return {
            firstName: props.user.firstName || '',
            name: props.user.name || '',
            dateOfBirth: props.user.dateOfBirth || '',
            city: props.user.city || '',
            email: props.user.email || '',
            numberPhone: props.user.numberPhone || '',
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
