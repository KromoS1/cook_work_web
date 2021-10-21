import React, {FC, memo} from 'react'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Redirect} from "react-router-dom";
import style from './Resume.module.scss';
import {ResumeForm} from "./ResumeForm";
import {ResumeType, setDataResume} from "../../store/reducers/ResumeReducer";
import {options} from "../../store/reducers/VacancyReducer";

const Resume: FC = memo(() => {

    const user = useAppSelector(state => state.userAccount);
    const dispatch = useAppDispatch();

    const submit = (data: ResumeType) => {
        dispatch(setDataResume(data));
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Резюме</h2>
            <ResumeForm user={user} onSubmit={submit} options={options}/>
        </div>
    )
})

export default Resume;
