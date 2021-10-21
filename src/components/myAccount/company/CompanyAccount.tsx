import React, {FC, memo, useCallback} from 'react'
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {CompanyAccountType, setDataCompany} from "../../../store/reducers/CompanyAccountReducer";
import {Redirect} from "react-router-dom";
import style from './CompanyAccount.module.scss';
import {CompanyAccountForm} from "./CompanyAccountFrom";

const CompanyAccount:FC = memo(() => {

    const company = useAppSelector(state => state.companyAccount);
    const dispatch = useAppDispatch();

    const submit = useCallback((data:CompanyAccountType) => {
        dispatch(setDataCompany(data));
    },[dispatch])

return (
        <div className={style.container}>
            <h2 className={style.title}>Данные компании</h2>
            <CompanyAccountForm company={company} onSubmit={submit}/>
        </div>
    )
})

export default CompanyAccount;
