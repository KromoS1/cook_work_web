import React, {FC, memo, useCallback} from 'react'
import style from './UserAccount.module.scss';
import {UserAccountForm} from "./UserAccountForm";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {setDataUsers, UserAccountType} from "../../../store/reducers/UserAccountReducer";

const UserAccount: FC = memo(() => {

    const user = useAppSelector(state => state.userAccount);
    const dispatch = useAppDispatch();

    const submit = useCallback((formData: UserAccountType) => {
        dispatch(setDataUsers(formData));
    }, [dispatch]);

    return (
        <div className={style.container}>
            <h2 className={style.title}>Мой аккаунт</h2>
            <UserAccountForm onSubmit={submit} user={user}/>
        </div>
    )
})

export default UserAccount;
