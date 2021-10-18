import {configureStore} from "@reduxjs/toolkit";
import {statusAppReducer} from "./reducers/StatusAppReducer";
import thunkMiddleware from 'redux-thunk';
import {userAccountReducer} from "./reducers/UserAccountReducer";
import {resumeReducer} from "./reducers/ResumeReducer";
import {vacancyReducer} from "./reducers/VacancyReducer";
import {companyAccountReducer} from "./reducers/CompanyAccountReducer";

export const store = configureStore({
    reducer:{
        statusApp:statusAppReducer,
        userAccount:userAccountReducer,
        companyAccount:companyAccountReducer,
        resume:resumeReducer,
        vacancy:vacancyReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type StoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


