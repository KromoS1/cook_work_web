import {FC, memo, useCallback} from "react";
import style from './Login.module.scss';
import {LoginForm, ValuesLoginType} from "./LoginForm";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {loginAccount} from "../../store/reducers/StatusAppReducer";
import {Redirect} from "react-router-dom";

export const Login: FC = memo(() => {

    const isAuth = useAppSelector(state => state.statusApp.isAuth);
    const dispatch = useAppDispatch();

    const submit = useCallback((formData: ValuesLoginType) => {
        dispatch(loginAccount(formData));
    },[dispatch])

    if (isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={style.box}>
            <LoginForm onSubmit={submit}/>
        </div>
    )
})
