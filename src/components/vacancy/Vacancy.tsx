import React, {FC, memo} from 'react'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Redirect} from "react-router-dom";
import {options, setDataVacancy, VacancyType} from "../../store/reducers/VacancyReducer";
import style from './Vacancy.module.scss';
import {VacancyForm} from "./VacancyForm";

const Vacancy:FC = memo(() => {

    const company = useAppSelector(state => state.companyAccount);
    const dispatch = useAppDispatch();

    const submit = (data: VacancyType) => {
        dispatch(setDataVacancy(data));
    }

return (
        <div className={style.container}>
            <h2 className={style.title}>Вакансия</h2>
            <VacancyForm options={options} company={company} onSubmit={submit}/>
        </div>
    )
})

export default Vacancy;
