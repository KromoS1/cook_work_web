import React, {FC, memo} from 'react'
import {FormikProps, useFormik, withFormik} from "formik";
import {VacancyType} from "../../store/reducers/VacancyReducer";
import {CompanyAccountType} from "../../store/reducers/CompanyAccountReducer";
import * as Yup from "yup";
import style from "./Vacancy.module.scss";
import {Button, TextField} from "@material-ui/core";
import {Autocomplete, InputAdornment} from "@mui/material";
import city from "../../location/by-cities.json";

interface FormFormikProps {
    options: { name: string }[]
    company: CompanyAccountType
    onSubmit: (data: VacancyType) => void
}

const Form: FC<FormFormikProps & FormikProps<VacancyType>> = memo(props => {

    const formik = useFormik({
        initialValues: {
            nameCompany: props.initialValues.nameCompany,
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
            nameCompany: Yup.string().required('Обязательное поле.'),
            email: Yup.string().email('Invalid email').required('Обязательное поле'),
            numberPhone: Yup.number().required('Обязательное поле'),
        }),
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    return (
        <form name={'vacancy'} onSubmit={formik.handleSubmit} className={style.form}>
            <TextField label={"Название компании"}
                       {...formik.getFieldProps("nameCompany")}
                       error={formik.errors.nameCompany !== undefined}
                       helperText={formik.errors.nameCompany ? formik.errors.nameCompany : null}
                       variant={'outlined'}
                       className={style.field}/>
            <Autocomplete className={style.field} freeSolo options={city.map((option) => option.name)}
                          renderInput={(params) =>
                              <TextField {...params}
                                         label={"Город"}
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

export const VacancyForm = memo(withFormik<FormFormikProps, VacancyType>({
    mapPropsToValues: props => {
        return {
            nameCompany:props.company.nameCompany || '',
            city: props.company.city || '',
            email: props.company.email || '',
            numberPhone: props.company.numberPhone || '',
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
