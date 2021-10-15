import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {StoreType} from "../store/store";

interface MapPropsType {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StoreType) => ({
    isAuth: state.statusApp.isAuth
})

export function AuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapPropsType) => {
        const {isAuth, ...restProps} = props;
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    return connect<MapPropsType, {}, T, StoreType>(mapStateToPropsForRedirect)(RedirectComponent);
}
