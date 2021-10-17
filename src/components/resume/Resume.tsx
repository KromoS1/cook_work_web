import React, {ComponentType, FC, memo} from 'react'
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {useAppSelector} from "../../store/hooks";
import {Redirect} from "react-router-dom";


const Resume: FC = () => {
    const isAuth = useAppSelector(state => state.statusApp.isAuth);

    if (!isAuth) return <Redirect to={'/login'}/>
    return (
        <>
            <h1 style={{color: 'black'}}>RESUME</h1>
        </>
    )
}

export default compose<ComponentType>(AuthRedirect, memo)(Resume);
