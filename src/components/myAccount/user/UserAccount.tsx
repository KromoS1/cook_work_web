import React, {FC, memo, useCallback} from 'react'
import style from './UserAccount.module.scss';
import {UserAccountForm} from "./UserAccountForm";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setDataUsers, UserAccountType} from "../../../store/reducers/UserAccountReducer";
import {Redirect} from "react-router-dom";

const UserAccount: FC = memo(() => {

    const user = useAppSelector(state => state.userAccount);
    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const dispatch = useAppDispatch();

    const submit = useCallback((formData: UserAccountType) => {
        dispatch(setDataUsers(formData));
    }, [dispatch]);

    if (!isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={style.container}>
            <h2 className={style.title}>Мой аккаунт</h2>
            <UserAccountForm onSubmit={submit} user={user}/>
        </div>
    )
})

export default UserAccount;
