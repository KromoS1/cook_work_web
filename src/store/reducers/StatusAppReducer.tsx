import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type StatusType = 'idle' | 'load' | 'success' | 'error'

export interface StatusAppType {
    isInit: boolean
    isAuth:boolean
    status: StatusType
    message:string
}

const initialState: StatusAppType = {
    isInit:false,
    isAuth:false,
    status:'idle',
    message:'',
}

const slice = createSlice({
    name:'statusApp',
    initialState,
    reducers:{
        setIsInit(state,action:PayloadAction<{isInit:boolean}>){
            state.isInit = action.payload.isInit;
        },
        setStatusApp(state,action:PayloadAction<{status:StatusType,message:string}>){
            state.status = action.payload.status;
            state.message = action.payload.message;
        },
        setIsAuth(state,action:PayloadAction<{isAuth:boolean}>){
            state.isAuth = action.payload.isAuth;
        }
    }
});

export const statusAppReducer = slice.reducer;
export const actionsStatusApp = slice.actions;

