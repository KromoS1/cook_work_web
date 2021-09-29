import React, {memo} from 'react';
import style from './background.module.scss';
import salad from '../../eatSource/salad.jpg';
import meat1 from '../../eatSource/meat1.jpg';
import fish1 from '../../eatSource/fish1.jpg';
import cake2 from '../../eatSource/cake2.jpg';

export const Background = memo(() => {
    return (
        <div className={style.container}>
            <div className={style.treeLeft}/>
            {/*<div className={style.image}>*/}
            {/*    <img src={salad} alt="#" className={style.img}/>*/}
            {/*    <img src={meat1} alt="#" className={style.img}/>*/}
            {/*</div>*/}
            {/*<div className={style.image}>*/}
            {/*    <img src={fish1} alt="#" className={style.img}/>*/}
            {/*    <img src={cake2} alt="#" className={style.img}/>*/}
            {/*</div>*/}
            <div className={style.treeRight}/>
        </div>
    )
})
