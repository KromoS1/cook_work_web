import React, {ComponentType, FC, memo} from 'react'
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";


export const Resume:FC = () => {

    return (
        <>
            <h1 style={{color:'black'}}>RESUME</h1>
        </>
    )
}

export default compose<ComponentType>(AuthRedirect,memo)(Resume);
