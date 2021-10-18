import {FormikProps, useFormik, withFormik} from "formik";
import {CompanyAccountType} from "../../../store/reducers/CompanyAccountReducer";
import React, {FC, memo} from "react";
import * as Yup from "yup";
import style from './CompanyAccount.module.scss';
import {Button, TextField} from "@material-ui/core";
import {Autocomplete, InputAdornment} from "@mui/material";
import city from "../../../location/by-cities.json";

interface FormFormikProps {
    company: CompanyAccountType
    onSubmit: (data: CompanyAccountType) => void
}

const Form: FC<FormFormikProps & FormikProps<CompanyAccountType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            nameCompany:props.initialValues.nameCompany,
            city: props.initialValues.city,
            numberPhone: props.initialValues.numberPhone,
            email: props.initialValues.email,
        },
        validationSchema: Yup.object().shape({
            nameCompany: Yup.string().required('Обязательное поле.'),
            email: Yup.string().email('Invalid email').required('Обязательное поле'),
            numberPhone: Yup.number().required('Обязательное поле'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'companyAccount'} onSubmit={formik.handleSubmit} className={style.form}>
            <TextField label={formik.errors.nameCompany ? "Ошибка" : "Название компании"}
                       {...formik.getFieldProps("nameCompany")}
                       error={formik.errors.nameCompany !== undefined}
                       helperText={formik.errors.nameCompany ? formik.errors.nameCompany : null}
                       variant={'outlined'}
                       className={style.field}/>
            <Autocomplete className={style.field} freeSolo options={city.map((option) => option.name)}
                          renderInput={(params) =>
                              <TextField {...params}
                                         label={formik.errors.city ? "Ошибка" : "Город"}
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

export const CompanyAccountForm = withFormik<FormFormikProps, CompanyAccountType>({
    mapPropsToValues: props => {
        return {
            nameCompany:props.company.nameCompany || '',
            city: props.company.city || '',
            email: props.company.email || '',
            numberPhone: props.company.numberPhone || '',
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form);
