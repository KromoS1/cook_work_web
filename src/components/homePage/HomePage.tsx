import React,{FC, memo} from 'react'
import {useAppSelector} from "../../store/hooks";
import {Redirect} from "react-router-dom";
import {Logo} from "./Logo";
import style from './HomePage.module.scss';

export const HomePage:FC = memo(() => {

    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    if (!isAuth) return <Redirect to={'/login'}/>

return (
        <div className={style.container}>
            <Logo/>
            <span className={style.welcome}>
                Добро пожаловать, дорогие пользователи. Здесь вы сможете быстро и в удобном формате найти
                работу в сфере ресторанного бизнеса.
            </span>
        </div>
    )
})
