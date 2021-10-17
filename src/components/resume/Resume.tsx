import React, {ComponentType, FC, memo} from 'react'
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {Redirect} from "react-router-dom";
import style from './Resume.module.scss';
import {ResumeCreate} from "./ResumeCreate";
import {ResumeType, setDataResume} from "../../store/reducers/ResumeReducer";


const Resume: FC = () => {
    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const user = useAppSelector(state => state.meAccount);
    const dispatch = useAppDispatch();

    if (!isAuth) return <Redirect to={'/login'}/>

    const submit = (data: ResumeType) => {
        dispatch(setDataResume(data));
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Резюме</h2>
            <ResumeCreate user={user} onSubmit={submit}/>
        </div>
    )
}

export default compose<ComponentType>(AuthRedirect, memo)(Resume);
