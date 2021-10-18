import React, {lazy, useEffect} from 'react';
import style from './App.module.scss';
import {BrowserRouter, Route} from "react-router-dom";
import {Login} from "../components/login/Login";
import {Header} from "../components/header/header";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {initializeApp} from "../store/reducers/StatusAppReducer";
import {Preloader} from "../preloader/Preloader";
import {Grid} from "@material-ui/core";
import Box from "@mui/material/Box";
import {HomePage} from "../components/homePage/HomePage";
import {WithSuspense} from "../hoc/WithSuspense";

const UserAccount = lazy(() => import("../components/myAccount/user/UserAccount"));
const CompanyAccount = lazy(() => import("../components/myAccount/company/CompanyAccount"));
const Registration = lazy(() => import("../components/registration/Registration"));
const Resume = lazy(() => import("../components/resume/Resume"));
const Vacancy = lazy(() => import("../components/vacancy/Vacancy"));

export const App = () => {

    const isInit = useAppSelector(state => state.statusApp.isInit);
    const typeAccount = useAppSelector(state => state.statusApp.typeAccount);
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
                    {
                        typeAccount === 'seeker'
                            ? <Route path={'/account'} render={WithSuspense(UserAccount)}/>
                            : <Route path={'/account'} render={WithSuspense(CompanyAccount)}/>
                    }
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/registration'} render={WithSuspense(Registration)}/>
                    {
                        typeAccount === 'seeker'
                            ? <Route exact path={'/resume'} render={WithSuspense(Resume)}/>
                            : <Route exact path={'/vacancy'} render={WithSuspense(Vacancy)}/>
                    }
                </Grid>
                <Grid item className={style.treeRight}/>
            </Box>
        </BrowserRouter>
    );
}
