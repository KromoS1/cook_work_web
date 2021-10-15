import React from 'react';
import style from './App.module.scss';
import {HashRouter, Route} from "react-router-dom";
import {Resume} from "../components/resume/Resume";
import {Login} from "../components/login/Login";
import {Header} from "../components/header/header";
import {MyAccount} from "../components/myAccount/MyAccount";
import {Registration} from "../components/registration/Registration";

export const App = () => {
    return (
        <HashRouter>
            <div className={style.page}>
                <div className={style.treeLeft}/>
                <div className={style.content}>
                    <Header/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <Route path={'/resume'} render={() => <Resume/>}/>
                    <Route path={'/user'} render={() => <MyAccount/>}/>
                    <Route path={'/registration'} render={() => <Registration/>}/>
                </div>
                <div className={style.treeRight}/>
            </div>
        </HashRouter>
    );
}
