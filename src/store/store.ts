import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {actionsStatusApp, statusAppReducer} from "./reducers/StatusAppReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

const rootReducer = combineReducers({
    statusApp:statusAppReducer
})

export const store = configureStore({
    reducer:rootReducer,
    middleware:getDefaultMiddleware =>getDefaultMiddleware().prepend(thunkMiddleware),
})

export const actions = {
    ...actionsStatusApp,
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppThunkType<ReturnType = void> =
    ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    ActionsType<typeof actions>>

