import React, {ComponentType, FC, memo} from 'react'
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import style from './MyAccount.module.scss';



export const MyAccount:FC = () => {

return (
        <div className={style.container}>
            <h2>Me Account</h2>
        </div>
    )
}

export default compose<ComponentType>(AuthRedirect,memo)(MyAccount);
