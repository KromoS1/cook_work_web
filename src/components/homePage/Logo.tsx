import React,{FC, memo} from 'react'
import style from "./HomePage.module.scss";

export const Logo:FC = memo(() => {

return (
    <div className={style.logo}>
        <span className={style.one}/>
        <span className={style.two}/>
        <span className={style.three}/>
        <span className={style.four}/>
    </div>
    )
})
