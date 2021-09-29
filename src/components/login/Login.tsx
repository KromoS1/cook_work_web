import {FC, memo} from "react";
import style from './Login.module.scss';
import {LoginForm, ValuesType} from "./LoginForm";

export const Login:FC = memo(() => {

    const submit = (formData: ValuesType) => {
        console.log(formData)
    }

    return (
        <div className={style.box}>
            <LoginForm onSubmit={submit}/>
        </div>
    )
})
