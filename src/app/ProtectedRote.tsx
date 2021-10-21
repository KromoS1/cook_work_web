import {useAppSelector} from "../store/hooks";
import {Redirect, Route} from "react-router-dom";

type PropsType = {
    component: Comment,
    rest: any
}

export function ProtectedRote({component:Component,...rest}:any) {
    const isAuth = useAppSelector(state => state.statusApp.isAuth);

    return <Route {...rest} render={({location}) => {
        return isAuth
        ? <Component/>
            :<Redirect to={{
                pathname:'/login',
                state:{from:location}
            }}/>
    }}/>
}
