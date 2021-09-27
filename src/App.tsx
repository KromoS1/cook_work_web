import React from 'react';
import style from './App.module.scss';
import {HashRouter, Route} from "react-router-dom";
import {Login} from "./components/Login/Login";
import {Resume} from "./components/Resume/Resume";

export const App = () => {
    return (
        <HashRouter>
            <div className={style.page}>
                <Route path={'/login'} component={Login}/>
                <Route path={'/resume'} component={Resume}/>
            </div>
        </HashRouter>
    );
}
