import React, {FC, memo} from 'react'
import {UserAccountType} from "../../store/reducers/UserAccountReducer";
import {FormikProps, useFormik, withFormik} from "formik";
import * as Yup from "yup";
import style from "./Resume.module.scss";
import {Button, TextField} from "@material-ui/core";
import {Autocomplete, InputAdornment} from "@mui/material";
import city from "../../location/by-cities.json";
import {ResumeType} from "../../store/reducers/ResumeReducer";

interface FormFormikProps {
    options: { name: string }[]
    user: UserAccountType
    onSubmit: (data: ResumeType) => void
}

const Form: FC<FormFormikProps & FormikProps<ResumeType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            firstName: props.initialValues.firstName,
            name: props.initialValues.name,
            dateOfBirth: props.initialValues.dateOfBirth,
            city: props.initialValues.city,
            numberPhone: props.initialValues.numberPhone,
            email: props.initialValues.email,
            position: props.initialValues.position,
            experience: props.initialValues.experience,
            salary: props.initialValues.salary,
            typeOfEmployment: props.initialValues.typeOfEmployment,
            information: props.initialValues.information,
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
        <form name={'resume'} onSubmit={formik.handleSubmit} className={style.form}>
            <TextField label={"Фамилия"}
                       {...formik.getFieldProps("firstName")}
                       error={formik.errors.firstName !== undefined}
                       helperText={formik.errors.firstName ? formik.errors.firstName : null}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={"Имя"}
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
                                         label={"Место жительства"}
                                         {...formik.getFieldProps("city")}
                                         variant={'outlined'}/>}/>
            <TextField label={"Email"}
                       {...formik.getFieldProps("email")}
                       error={formik.errors.email !== undefined}
                       helperText={formik.errors.email ? formik.errors.email : null}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={"Номер телефона"}
                       {...formik.getFieldProps("numberPhone")}
                       error={formik.errors.numberPhone !== undefined}
                       helperText={formik.errors.numberPhone ? formik.errors.numberPhone : null}
                       variant={'outlined'}
                       InputProps={{
                           startAdornment: <InputAdornment position="start">+375</InputAdornment>,
                       }}
                       className={style.field}/>
            <TextField label={"Должность"}
                       {...formik.getFieldProps("position")}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={"Опыт работы"}
                       {...formik.getFieldProps("experience")}
                       variant={'outlined'}
                       className={style.field}/>
            <TextField label={"Уровень зарплаты"}
                       {...formik.getFieldProps("salary")}
                       variant={'outlined'}
                       className={style.field}
                       InputProps={{
                           startAdornment: <InputAdornment position="start">$</InputAdornment>,
                       }}/>
            <Autocomplete options={props.options.map(el => el.name)} className={style.field} renderInput={params =>
                <TextField {...params}
                           label={"Тип занятости"}
                           {...formik.getFieldProps("typeOfEmployment")}
                           variant={'outlined'}/>}/>
            <TextField label={"Дополнительная информация"}
                       {...formik.getFieldProps("information")}
                       multiline
                       rows={6}
                       variant={'outlined'}
                       className={style.field}/>
            <div className={style.button}>
                <Button type="submit" variant={"contained"} color={"primary"}>
                    Создать
                </Button>
            </div>
        </form>
    )
});

export const ResumeForm = memo(withFormik<FormFormikProps, ResumeType>({
    mapPropsToValues: props => {
        return {
            firstName: props.user.firstName || '',
            name: props.user.name || '',
            dateOfBirth: props.user.dateOfBirth || '',
            city: props.user.city || '',
            email: props.user.email || '',
            numberPhone: props.user.numberPhone || '',
            position: '',
            experience: '',
            salary: '',
            typeOfEmployment: '',
            information: '',
            onSubmit: props.onSubmit,
        };
    },
    handleSubmit: (values, form) => {
        form.props.onSubmit(values);
    },
})(Form));
