import React from 'react';
import style from './App.module.scss';
import {HashRouter, Route} from "react-router-dom";
import {Resume} from "./components/resume/Resume";
import {Background} from "./components/background/background";
import {Login} from "./components/login/Login";
import {Header} from "./header/header";

export const App = () => {
    return (
        <HashRouter>
            <div className={style.page}>
                <Header/>
                <Background/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/resume'} component={Resume}/>
            </div>
        </HashRouter>
    );
}
