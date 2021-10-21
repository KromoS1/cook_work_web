import React, {FC, memo} from 'react'
import {Logo} from "./Logo";
import style from './HomePage.module.scss';

export const HomePage:FC = memo(() => {

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
