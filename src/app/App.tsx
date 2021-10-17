import React, {lazy, Suspense, useEffect} from 'react';
import style from './App.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "../components/login/Login";
import {Header} from "../components/header/header";
import {MyAccount} from "../components/myAccount/MyAccount";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {initializeApp} from "../store/reducers/StatusAppReducer";
import {Preloader} from "../preloader/Preloader";
import {Grid} from "@material-ui/core";
import Box from "@mui/material/Box";
import {HomePage} from "../components/homePage/HomePage";

const Registration = lazy(() => import("../components/registration/Registration"));
const Resume = lazy(() => import("../components/resume/Resume"));

export const App = () => {

    const isInit = useAppSelector(state => state.statusApp.isInit);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])

    if (!isInit) {
        return <Preloader/>
    }

    return (
        <BrowserRouter>
            <Box className={style.page}>
                <Grid item className={style.treeLeft}/>
                <Grid item className={style.content}>
                    <Header/>
                    <Route exact path={'/'} render={() => <HomePage/>}/>
                    <Route path={'/my-account'} render={() => <MyAccount/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/registration'} render={() => {
                        return <Suspense fallback={<></>}>
                            <Registration/>
                        </Suspense>
                    }}/>
                    <Route path={'/resume'} render={() => {
                        return <Suspense fallback={<></>}>
                            <Resume/>
                        </Suspense>
                    }}/>
                </Grid>
                <Grid item className={style.treeRight}/>
            </Box>
        </BrowserRouter>
    );
}
