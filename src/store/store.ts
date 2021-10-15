import {configureStore} from "@reduxjs/toolkit";
import {statusAppReducer} from "./reducers/StatusAppReducer";
import thunkMiddleware from 'redux-thunk';
import {myAccountReducer} from "./reducers/MyAccountReducer";

export const store = configureStore({
    reducer:{
        statusApp:statusAppReducer,
        meAccount:myAccountReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


