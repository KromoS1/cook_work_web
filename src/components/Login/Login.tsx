import {ChangeEvent, FC, memo, useState} from "react";
import style from './Login.module.scss';
import {Button, TextField} from "@material-ui/core";
import {NavLink} from "react-router-dom";

export const Login:FC = memo(() => {

    const [login,setLogin] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    const onChangeLogin = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setLogin(e.currentTarget.value);
    }

    const onChangePass = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPassword(e.currentTarget.value);
    }

    return (
        <div className={style.box}>
            <div className={style.container}>
                <h2 className={style.title}>Title</h2>
                <TextField label={'Login'} variant={'outlined'} onChange={onChangeLogin} value={login} className={style.field}/>
                <TextField label={'Password'} variant={'outlined'} onChange={onChangePass} value={password} className={style.field}/>
                <Button variant={'contained'} className={style.btnLog}>
                    <NavLink to={'/resume'}>Login</NavLink>
                </Button>
            </div>
        </div>
    )
})
