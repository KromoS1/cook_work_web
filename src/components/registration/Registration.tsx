import React, {FC, memo, useCallback} from 'react';
import style from './Registration.module.scss';
import {RegistrationForm, ValuesRegistrationType} from "./RegistrationForm";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {registrationAcc} from "../../store/reducers/StatusAppReducer";
import {Redirect} from "react-router-dom";

export const Registration:FC = memo(() => {

    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const dispatch = useAppDispatch();

    const submit = useCallback((formData: ValuesRegistrationType) => {
        dispatch(registrationAcc(formData));
    },[dispatch])

    if (isAuth) {
        return <Redirect to={'/user'}/>
    }

return (
        <div className={style.box}>
            <RegistrationForm onSubmit={submit}/>
        </div>
    )
})
