import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface MyAccountType {
    firstName: string
    name: string
    dateOfBirth: string
    city: string
    numberPhone: string
    email: string
}

const initialState: MyAccountType = {
    firstName: '',
    name: '',
    dateOfBirth: '',
    city: '',
    numberPhone: '',
    email: '',
}

export const setDataUsers = createAsyncThunk(
    'myAccount/setDataUsers',
    async (user:MyAccountType,{dispatch}) => {
        dispatch(actionsMyAccount.setMyData(user));
    }
)

const slice = createSlice({
    name: 'myAccount',
    initialState,
    reducers: {
        setMyData(state,action:PayloadAction<MyAccountType>){
            return action.payload;
        }
    }
})

export const myAccountReducer = slice.reducer;
export const actionsMyAccount = slice.actions
