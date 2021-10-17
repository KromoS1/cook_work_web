import React,{FC, memo} from 'react'
import preloader from './preloaderEgg.gif';
import style from './Preloader.module.scss';

export const Preloader:FC = memo(() => {

return (
        <div className={style.container}>
            <img src={preloader} alt=""/>
        </div>
    )
})
