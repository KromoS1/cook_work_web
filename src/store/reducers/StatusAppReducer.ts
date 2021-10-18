import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ValuesLoginType} from "../../components/login/LoginForm";
import {ValuesRegistrationType} from "../../components/registration/RegistrationForm";

export type StatusType = 'idle' | 'load' | 'success' | 'error';
export type AccountType = 'company' | 'seeker' ;

export interface StatusAppType {
    isInit: boolean
    isAuth: boolean
    typeAccount:AccountType
    statusApp: StatusType
    statusGeneral: boolean
    statusItem: boolean
    message: string
}

const initialState: StatusAppType = {
    isInit: false,
    isAuth: false,
    typeAccount:'company',
    statusApp: 'idle',
    statusGeneral: false,
    statusItem: false,
    message: '',
}

export const initializeApp = createAsyncThunk(
    'statusApp/initializeApp',
    async (_,{dispatch}) => {
        setTimeout(() => {
            dispatch(actionsStatusApp.setIsInit({isInit:true}))
        },2000)
    }
)

export const loginAccount = createAsyncThunk(
    'statusApp/login',
    async (dataLogin: ValuesLoginType, {dispatch}) => {
        dispatch(actionsStatusApp.setIsAuth({isAuth:true}));
    }
)

export const registrationAcc = createAsyncThunk(
    'statusApp/registration',
    async (dataReg:ValuesRegistrationType,{dispatch})=> {
        dispatch(actionsStatusApp.setIsAuth({isAuth:true}))
        if (dataReg.company){
            dispatch(actionsStatusApp.setTypeAccount({typeAccount:'company'}));
        }
    }
)

export const logOutAcc = createAsyncThunk(
    'statusApp/logout',
    async (_,{dispatch}) => {
        dispatch(actionsStatusApp.setIsAuth({isAuth:false}));
    }
)

const slice = createSlice({
    name: 'statusApp',
    initialState,
    reducers: {
        setIsInit(state, action: PayloadAction<{ isInit: boolean }>) {
            state.isInit = action.payload.isInit;
        },
        setStatusApp(state, action:PayloadAction<{statusApp:StatusType}>){
            state.statusApp = action.payload.statusApp;
        },
        setStatusGeneral(state, action: PayloadAction<{ statusGeneral: boolean}>) {
            state.statusGeneral = action.payload.statusGeneral;
        },
        setStatusItem(state, action: PayloadAction<{ statusItem: boolean}>) {
            state.statusItem = action.payload.statusItem;
        },
        setIsAuth(state, action: PayloadAction<{ isAuth: boolean }>) {
            state.isAuth = action.payload.isAuth;
        },
        setMessage(state,action:PayloadAction<{message:string}>){
            state.message = action.payload.message
        },
        setTypeAccount(state,action:PayloadAction<{typeAccount:AccountType}>){
            state.typeAccount = action.payload.typeAccount;
        }
    }
});

export const statusAppReducer = slice.reducer;
export const actionsStatusApp = slice.actions;

