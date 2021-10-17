import React, {ComponentType, FC, memo, useCallback} from 'react'
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import style from './MyAccount.module.scss';
import {MyAccountForm} from "./MyAccountForm";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {actionsMyAccount, MyAccountType} from "../../store/reducers/MyAccountReducer";
import {Redirect} from "react-router-dom";

export const MyAccount:FC = () => {

    const user = useAppSelector(state => state.meAccount);
    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const dispatch = useAppDispatch();

    const submit = useCallback((formData: MyAccountType) => {
        dispatch(actionsMyAccount.setMyData(formData));
    },[dispatch]);

    if (!isAuth){
        return <Redirect to={'/login'}/>
    }

return (
        <div className={style.container}>
            <h2>Мой аккаунт</h2>
            <MyAccountForm onSubmit={submit} user={user}/>
        </div>
    )
}

export default compose<ComponentType>(AuthRedirect,memo)(MyAccount);
